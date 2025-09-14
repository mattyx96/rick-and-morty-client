"use client";
import {
  CharacterAvatarCard,
  CharacterAvatarCardSkeleton,
} from "@/components/character-avatar-card";
import { GridLayout } from "@/components/layout/grid-layout";
import { PaginationComponent } from "@/components/pagination";
import { useCharactersPage } from "@/hooks/useCharactersPage";
import { isMobile } from "@/lib/utils";

export default function CharactersPage() {
  const { data, loading, pagination } = useCharactersPage();

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
    <div className="flex flex-col grow gap-10 mt-10 justify-center">
      <h1 className="text-5xl text-center md:text-left font-bold text-green-500 font-bangers">
        Characters
      </h1>

      <div className="flex flex-col gap-5">
        {isMobile() ? renderPagination() : null}

        <GridLayout>
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: used for skeleton static data
                <CharacterAvatarCardSkeleton key={index} />
              ))
            : data.map((character) => (
                <CharacterAvatarCard key={character.id} character={character} />
              ))}
        </GridLayout>

        {renderPagination()}
      </div>
    </div>
  );
}
