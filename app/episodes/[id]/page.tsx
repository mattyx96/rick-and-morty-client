import { CharactersGrid } from "@/components/characters-grid";
import { fetchEpisode } from "@/services/rick-and-morty-api-service";

interface EpisodePageProps {
  params: Promise<{ id: string }>;
}

export default async function EpisodeDetailPage({ params }: EpisodePageProps) {
  const { id } = await params;
  const episode = await fetchEpisode(Number(id));

  return (
    <main className="container mx-auto flex flex-col grow px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">{episode.name}</h1>
        <p className="text-lg mb-2">
          <span className="font-semibold">Episode:</span> {episode.episode}
        </p>
        <p className="text-lg mb-6">
          <span className="font-semibold">Air Date:</span> {episode.air_date}
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-4">Characters</h2>
        <CharactersGrid ids={episode.characters} />
      </div>
    </main>
  );
}
