import { useEffect, useState } from "react";
import type { Episode } from "@/models";
import { fetchEpisode } from "@/services/rick-and-morty-api-service";

export const useEpisodePage = (id: number) => {
  const [episode, setEpisode] = useState<Episode>();
  const [loading, setLoading] = useState<boolean>(true);

  const loadEpisode = async (id: number) => {
    setLoading(true);
    try {
      const episode = await fetchEpisode(id);
      setEpisode(episode);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEpisode(id).then(null);
  });

  return { episode, loadEpisode, loading };
};
