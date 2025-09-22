import {CharactersGrid} from "@/components/characters-grid";
import {fetchLocation} from "@/services/rick-and-morty-api-service";

interface LocationPageProps {
    params: Promise<{ id: string }>;
}

export default async function EpisodeDetailPage({params}: LocationPageProps) {
    const {id} = await params;
    const location = await fetchLocation(Number(id));

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{location.name}</h1>

      <div className="mb-6 text-lg space-y-1">
        <p>
          <span className="font-semibold">Type:</span> {location.type}
        </p>
        <p>
          <span className="font-semibold">Dimension:</span> {location.dimension}
        </p>
        <p>
          <span className="font-semibold">Created:</span>{" "}
          {new Date(location.created).toLocaleDateString()}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Residents</h2>

      {location.residents.length === 0 ? (
        <p className="text-muted-foreground">No known residents.</p>
      ) : (
        <CharactersGrid ids={location.residents} />
      )}
    </main>
  );
}
