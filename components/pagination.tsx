import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
  isNextPageAvailable: boolean;
}

export const PaginationComponent = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  isNextPageAvailable,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPrevious();
    }
  };

  const handleNext = () => {
    if (isNextPageAvailable) {
      onNext();
    }
  };

  return (
    <Pagination className="flex items-center justify-start text-gray-500 text-sm">
      <PaginationContent className="flex items-center gap-5">
        <PaginationItem>
          <PaginationPrevious
            onClick={handlePrevious}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            href="#"
          ></PaginationPrevious>
        </PaginationItem>

        <div>
          <span>{currentPage}</span>
          <span>{" of "}</span>
          <span>{totalPages}</span>
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            className={
              !isNextPageAvailable
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            href="#"
          ></PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
