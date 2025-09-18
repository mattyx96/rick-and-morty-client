"use client";
import { CharacterAvatarCard } from "@/components/character-avatar-card";
import { GridLayout } from "@/components/layout/grid-layout";
import { LoadingSpinner } from "@/components/loading-spinner";
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

  const renderContent = () => (
    <div className="flex flex-col gap-5">
      {isMobile() ? renderPagination() : null}
      <GridLayout className="animate-in">
        {data.map((character) => (
          <CharacterAvatarCard key={character.id} character={character} />
        ))}
      </GridLayout>
    </div>
  );

  return (
    <div className="flex flex-col grow gap-3 mt-10 justify-between pb-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl text-center md:text-left font-bold font-bangers text-accent">
          Characters
        </h1>

        {loading ? <LoadingSpinner /> : renderContent()}
      </div>
      {!loading && renderPagination()}
    </div>
  );
}
