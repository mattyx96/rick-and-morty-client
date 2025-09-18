import { useEffect, useState } from "react";
import type { Character } from "@/models";
import { fetchCharacter } from "@/services/rick-and-morty-api-service";

export const useLoadCharacters = (ids: number[] = []) => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const characters = await Promise.all(ids.map(fetchCharacter));
      setData(characters || []);
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
