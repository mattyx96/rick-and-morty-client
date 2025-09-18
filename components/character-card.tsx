import Image from "next/image";
import { useState } from "react";
import { EpisodesGrid } from "@/components/episodes-grid";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Character } from "@/models";

export function CharacterCard(props: Readonly<{ character: Character }>) {
  const {
    name,
    image,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
  } = props.character;

  const [imageLoaded, setImageLoaded] = useState(false);

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
    <Card className="w-full overflow-hidden pt-0 duration-300">
      <CardHeader className="p-0">
        <div className="relative h-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            height={460}
            width={460}
            className={`object-cover ${!imageLoaded && "h-0"}`}
            onLoadingComplete={() => setImageLoaded(true)}
          />

          {!imageLoaded && <LoadingSpinner />}

          <Badge
            variant={getStatusVariant(status)}
            className="absolute top-3 right-3"
          >
            <div className="w-2 h-2 rounded-full bg-current mr-1 animate-pulse" />
            {status}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        {/* Nome e specie */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-balance leading-tight">
            {name}
          </h2>
          <Badge variant="outline" className="w-fit">
            {species}
          </Badge>
        </div>

        <Separator />

        {/* Info principali */}
        <div className="space-y-3 text-sm">
          {type && (
            <div className="space-y-1">
              <span className="font-medium text-muted-foreground">Type</span>
              <p className="text-pretty">{type}</p>
            </div>
          )}

          <div className="space-y-1">
            <span className="font-medium text-muted-foreground">Gender</span>
            <p className="text-pretty">{gender}</p>
          </div>

          <div className="space-y-1">
            <span className="font-medium text-muted-foreground">Origin</span>
            <p className="text-pretty">{origin.name}</p>
          </div>

          <div className="space-y-1">
            <span className="font-medium text-muted-foreground">
              Last known location
            </span>
            <p className="text-pretty">{location.name}</p>
          </div>

          <div className="space-y-1">
            <span className="font-medium text-muted-foreground">Episodes</span>

            <EpisodesGrid ids={episode} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
