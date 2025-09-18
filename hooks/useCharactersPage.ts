"use client";
import { useEffect, useMemo, useState } from "react";
import type { Character, CharacterFilter, PaginatedResponse } from "@/models";
import { fetchCharacters } from "@/services/rick-and-morty-api-service";

const SHOW_PAGINATION_CAP = 20;

export const useCharactersPage = (defaultData: Character[] = []) => {
  const [data, setData] = useState<Character[]>(defaultData);
  const [pagination, setPagination] = useState<
    PaginatedResponse<Character[]>["info"]
  >({
    pages: 0,
    count: 0,
    next: null,
    prev: null,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (filters?: CharacterFilter) => {
    setLoading(true);
    try {
      const result = await fetchCharacters(filters);
      setData(result.results || defaultData);
      setPagination(result.info);
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isNextPageAvailable = useMemo(() => {
    return pagination?.next !== null;
  }, [pagination]);

  const showPagination = useMemo(() => {
    return (pagination?.count ?? 0) > SHOW_PAGINATION_CAP;
  }, [pagination]);

  const fetchPreviousPage = async () => {
    const previousPage = currentPage - 1;
    if (previousPage < 1) return;

    await fetchData({ page: previousPage });
    setCurrentPage(previousPage);
  };

  const fetchNextPage = async () => {
    const nextPage = currentPage + 1;
    if (!isNextPageAvailable) return;

    await fetchData({ page: nextPage });
    setCurrentPage(nextPage);
  };

  useEffect(() => {
    fetchData().then(null);
  }, []);

  return {
    data,
    pagination: {
      pages: pagination?.pages ?? 0,
      count: pagination?.count ?? 0,
      currentPage,
      showPagination,
      isNextPageAvailable,
      fetchNextPage,
      fetchPreviousPage,
    },
    loading,
    errorMessage,
  };
};
