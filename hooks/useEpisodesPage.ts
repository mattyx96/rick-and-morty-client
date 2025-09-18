"use client";
import { useEffect, useState } from "react";
import { usePagination } from "@/hooks/usePagination";
import type { Episode, EpisodeFilter } from "@/models";
import { fetchEpisodes } from "@/services/rick-and-morty-api-service";

const SHOW_PAGINATION_CAP = 10;

export const useEpisodesPage = (defaultData: Episode[] = []) => {
  const [data, setData] = useState<Episode[]>(defaultData);

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const { pagination, setPagination, ...paginationRest } = usePagination(
    (page) => {
      setLoadingMore(true);
      fetchData({ page }).finally(() => setLoadingMore(false));
    },
    SHOW_PAGINATION_CAP,
  );

  const fetchData = async (filters?: EpisodeFilter) => {
    try {
      const result = await fetchEpisodes(filters);
      const newData = new Set([...data, ...(result?.results || [])]);
      setData([...newData]);
      setPagination(result.info);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, []);

  return {
    data,
    pagination: {
      pages: pagination?.pages ?? 0,
      count: pagination?.count ?? 0,
      ...paginationRest,
    },
    loading,
    loadingMore,
    errorMessage,
  };
};
