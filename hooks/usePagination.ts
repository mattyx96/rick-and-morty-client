import { useMemo, useState } from "react";
import type { Episode, PaginatedResponse } from "@/models";

export const usePagination = (
  onPageChange: (page: number) => void,
  threshold: number = 0,
) => {
  const [pagination, setPagination] = useState<
    PaginatedResponse<Episode[]>["info"]
  >({
    pages: 0,
    count: 0,
    next: null,
    prev: null,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const isNextPageAvailable = useMemo(() => {
    return pagination?.next !== null;
  }, [pagination]);

  const showPagination = useMemo(() => {
    return (pagination?.count ?? 0) > threshold;
  }, [pagination]);

  const fetchPreviousPage = async () => {
    const previousPage = currentPage - 1;
    if (previousPage < 1) return;

    onPageChange(previousPage);
    setCurrentPage(previousPage);
  };

  const fetchNextPage = async () => {
    const nextPage = currentPage + 1;
    if (!isNextPageAvailable) return;

    onPageChange(nextPage);
    setCurrentPage(nextPage);
  };

  const fetchPage = async (page: number) => {
    onPageChange(page);
    setCurrentPage(page);
  };

  return {
    pagination,
    setPagination,
    currentPage,
    isNextPageAvailable,
    showPagination,
    fetchPreviousPage,
    fetchNextPage,
    fetchPage,
  };
};
