"use client";

import Link from "next/link";
import { EpisodeCard } from "@/components/episode-card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useLoadEpisodes } from "@/hooks/useLoadEpisodes";

export const EpisodesGrid = ({ ids }: { ids: number[] }) => {
  const { data, loading } = useLoadEpisodes(ids);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-10 flex flex-col gap-5">
      {data.map((episode) => (
        <Link
          className="w-full p-0"
          key={episode.url + episode.id}
          href={`/episodes/${episode.id}`}
        >
          <EpisodeCard key={episode.id} episode={episode} />
        </Link>
      ))}
    </div>
  );
};
