"use client";
import Link from "next/link";
import { GridLayout } from "@/components/layout/grid-layout";
import { LocationCard, LocationCardSkeleton } from "@/components/location-card";
import { PaginationComponent } from "@/components/pagination";
import { useLocationsPage } from "@/hooks/useLocationsPage";
import { isMobile } from "@/lib/utils";

export default function LocationsPage() {
  const { data, loading, pagination } = useLocationsPage();

  const renderPagination = () => (
    <PaginationComponent
      currentPage={pagination.currentPage}
      totalPages={pagination.pages}
      onNext={pagination.fetchNextPage}
      onPrevious={pagination.fetchPreviousPage}
      isNextPageAvailable={pagination.isNextPageAvailable}
    />
  );

  return (
    <div className="flex flex-col grow gap-3 mt-10 justify-between pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-center md:text-left font-bold text-green-500 font-bangers">
          Locations
        </h1>

        <div className="flex flex-col gap-5">
          {isMobile() ? renderPagination() : null}

          <GridLayout>
            {loading
              ? Array.from({ length: 20 }).map((_, index) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: used for skeleton static data
                  <LocationCardSkeleton key={index} />
                ))
              : data.map((location) => (
                  <Link
                    className="w-full p-0"
                    key={location.id}
                    href={`/locations/${location.id}`}
                  >
                    <LocationCard location={location} />
                  </Link>
                ))}
          </GridLayout>
        </div>
      </div>
      {renderPagination()}
    </div>
  );
}
