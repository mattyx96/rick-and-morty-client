import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Character } from "@/models";

export function CharacterCard(props: Readonly<{ character: Character }>) {
  const { name, image, status, species, origin, location } = props.character;

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
            src={image || "/placeholder.svg"}
            alt={name}
            height={460}
            width={460}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

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
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-balance leading-tight">
            {name}
          </h2>
          <Badge variant="outline" className="w-fit">
            {species}
          </Badge>
        </div>

        <Separator />

        <div className="space-y-3 text-sm">
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

          {/*{episode_count > 0 && (*/}
          {/*    <div className="flex items-center justify-between">*/}
          {/*        <span className="font-medium text-muted-foreground">Episodes</span>*/}
          {/*        <Badge variant="secondary">{episode_count}</Badge>*/}
          {/*    </div>*/}
          {/*)}*/}
        </div>
      </CardContent>
    </Card>
  );
}
