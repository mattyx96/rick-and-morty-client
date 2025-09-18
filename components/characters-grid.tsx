"use client";

import { CharacterAvatarCard } from "@/components/character-avatar-card";
import { GridLayout } from "@/components/layout/grid-layout";
import { LoadingSpinner } from "@/components/loading-spinner";
import { useLoadCharacters } from "@/hooks/useLoadCharacters";

export const CharactersGrid = ({ ids }: { ids: number[] }) => {
  const { data, loading } = useLoadCharacters(ids);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <GridLayout>
      {data.map((character) => (
        <CharacterAvatarCard key={character.id} character={character} />
      ))}
    </GridLayout>
  );
};
