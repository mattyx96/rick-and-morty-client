"use client";
import Link from "next/link";
import { EpisodeCard } from "@/components/episode-card";
import { GridLayout } from "@/components/layout/grid-layout";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PaginationComponent } from "@/components/pagination";
import { useEpisodesPage } from "@/hooks/useEpisodesPage";
import { isMobile } from "@/lib/utils";

export default function EpisodesPage() {
  const { data, loading, pagination } = useEpisodesPage();

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
        {data.map((episode) => (
          <Link
            className="w-full p-0"
            key={episode.id}
            href={`/episodes/${episode.id}`}
          >
            <EpisodeCard episode={episode} />
          </Link>
        ))}
      </GridLayout>
    </div>
  );

  return (
    <div className="flex flex-col grow gap-3 mt-10 justify-between pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-center md:text-left font-bold text-green-500 font-bangers">
          Episodes
        </h1>

        {loading ? <LoadingSpinner /> : renderContent()}
      </div>
      {!loading && renderPagination()}
    </div>
  );
}
