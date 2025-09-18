"use client";

import { useState } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Character } from "@/models";
import { CharacterDialog } from "./character-modal";

export function CharacterAvatarCard({
  character,
}: Readonly<{ character: Character }>) {
  const { name, image, status, species } = character;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getStatusVariant = (
    status: string,
  ): "default" | "secondary" | "destructive" => {
    switch (status) {
      case "Alive":
        return "default";
      case "Dead":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <>
      <Card
        className="w-full p-4 overflow-hidden cursor-pointer animate-in fade-in duration-200 hover:ring-2 hover:ring-accent"
        onClick={() => setIsDialogOpen(true)}
      >
        <CardContent className="p-1 flex items-center text-center gap-3">
          <div className="relative flex items-center">
            <Avatar className="w-14 h-14">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>
                <LoadingSpinner className="size-14" />
              </AvatarFallback>
            </Avatar>
            <Badge
              variant={getStatusVariant(status)}
              className="absolute -bottom-1 -right-1"
            >
              {status}
            </Badge>
          </div>

          <div className="flex flex-col items-start gap-1 text-start whitespace-nowrap overflow-hidden text-ellipsis">
            <h3 className="font-semibold text-lg">{name}</h3>
            <span className="text-sm text-gray-500">{species}</span>
          </div>
        </CardContent>
      </Card>
      <CharacterDialog
        character={character}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
}

export function CharacterAvatarCardSkeleton() {
  return (
    <Card className="relative background-portal-spinner w-full p-4 overflow-hidden animate-in duration-300">
      <CardContent className="opacity-0 p-1 flex items-center text-center animate-pulse gap-3">
        <div className="relative flex items-center">
          <Skeleton className="w-14 h-14 rounded-full" />
          <Skeleton className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full" />
        </div>

        <div className="flex flex-col items-start gap-1 text-start whitespace-nowrap overflow-hidden text-ellipsis">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}
