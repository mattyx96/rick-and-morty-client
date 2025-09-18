"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Episode } from "@/models";

export function EpisodeCard({ episode }: Readonly<{ episode: Episode }>) {
  return (
    <Card className="w-full p-4 rounded-xl overflow-hidden cursor-pointer animate-in fade-in duration-200 hover:ring-2 hover:ring-accent">
      <CardContent className="flex flex-col items-start gap-1 text-start whitespace-nowrap overflow-hidden text-ellipsis">
        <h3 className="font-semibold text-md">{episode.episode}</h3>
        <p className="text-sm">
          <span className="font-medium">{episode.name}</span>
        </p>
        <p className="text-sm">
          <span className="font-medium">Air Date:</span> {episode.air_date}
        </p>
      </CardContent>
    </Card>
  );
}

export function EpisodeCardSkeleton() {
  return (
    <Card className="w-full p-4 px-2 overflow-hidden animate-in duration-300">
      <CardContent className="flex flex-col items-start gap-1 text-start whitespace-nowrap overflow-hidden text-ellipsis">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-4 w-28" />
      </CardContent>
    </Card>
  );
}
