"use client";
import Link from "next/link";
import { EpisodeCard } from "@/components/episode-card";
import { InfiniteScroll } from "@/components/infinite-scroll";
import { GridLayout } from "@/components/layout/grid-layout";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useEpisodesPage } from "@/hooks/useEpisodesPage";

export default function EpisodesPage() {
  const { data, pagination, loading, loadingMore } = useEpisodesPage();

  const renderContent = () => (
    <div className="flex flex-col gap-5">
      <InfiniteScroll
        loading={loadingMore}
        hasMore={pagination.isNextPageAvailable}
        onReachThreshold={pagination.fetchNextPage}
      >
        <GridLayout className="animate-in">
          {data.map((episode) => (
            <Link
              className="w-full p-0"
              key={episode.url + episode.id}
              href={`/episodes/${episode.id}`}
            >
              <EpisodeCard episode={episode} />
            </Link>
          ))}
        </GridLayout>
      </InfiniteScroll>
    </div>
  );

  return (
    <div className="flex flex-col grow gap-3 mt-10 justify-between pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-center md:text-left font-bold text-primary font-bangers">
          Episodes
        </h1>

        {loading ? <LoadingSpinner /> : renderContent()}
      </div>
    </div>
  );
}
