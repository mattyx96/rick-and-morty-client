"use client";
import { useEffect, useState } from "react";
import { usePagination } from "@/hooks/usePagination";
import type { Location, LocationFilter } from "@/models";
import { fetchLocations } from "@/services/rick-and-morty-api-service";

const SHOW_PAGINATION_CAP = 10;

export const useLocationsPage = (defaultData: Location[] = []) => {
  const [data, setData] = useState<Location[]>(defaultData);

  const { pagination, setPagination, ...paginationRest } = usePagination(
    (page) => fetchData({ page }),
    SHOW_PAGINATION_CAP,
  );

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (filters?: LocationFilter) => {
    setLoading(true);
    try {
      const result = await fetchLocations(filters);
      setData(result.results || defaultData);
      setPagination(result.info);
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
    pagination: {
      pages: pagination?.pages ?? 0,
      count: pagination?.count ?? 0,
      ...paginationRest,
    },
    loading,
    errorMessage,
  };
};
