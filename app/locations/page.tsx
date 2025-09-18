"use client";
import Link from "next/link";
import { GridLayout } from "@/components/layout/grid-layout";
import { LoadingSpinner } from "@/components/loading-spinner";
import { LocationCard } from "@/components/location-card";
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

  const renderContent = () => (
    <div className="flex flex-col gap-5">
      {isMobile() ? renderPagination() : null}
      <GridLayout className="animate-in">
        {data.map((location) => (
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
  );

  return (
    <div className="flex flex-col grow gap-3 mt-10 justify-between pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-center md:text-left font-bold text-accent font-bangers">
          Locations
        </h1>

        {loading ? <LoadingSpinner /> : renderContent()}
      </div>
      {!loading && renderPagination()}
    </div>
  );
}
