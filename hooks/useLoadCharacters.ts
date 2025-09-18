import { useEffect, useState } from "react";
import type { Character } from "@/models";
import { fetchCharactersByIds } from "@/services/rick-and-morty-api-service";

export const useLoadCharacters = (ids: number[] = []) => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const characters = await fetchCharactersByIds(ids);
      if (Array.isArray(characters)) {
        setData(characters || []);
      }
      if (!Array.isArray(characters) && Object.keys(characters).length > 0) {
        setData([characters]);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData().then(null);
  }, []);

  return {
    data,
    loading,
    errorMessage,
  };
};
