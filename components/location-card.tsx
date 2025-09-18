import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Location } from "@/models";

interface LocationCardProps {
  location: Location;
  onClick?: () => void;
}

function getTypeVariant(type: string) {
  switch (type.toLowerCase()) {
    case "planet":
      return "default";
    case "space station":
      return "secondary";
    case "dimension":
      return "outline";
    default:
      return "default";
  }
}

export function LocationCard({
  location,
  onClick,
}: Readonly<LocationCardProps>) {
  const { name, type, residents } = location;

  return (
    <Card
      className="w-full p-4 overflow-hidden cursor-pointer animate-in fade-in duration-200 hover:ring-2 hover:ring-accent"
      onClick={onClick}
    >
      <CardContent className="p-1 flex items-center gap-3">
        <div className="flex flex-col items-start gap-1 text-start flex-1 min-w-0">
          <div className="flex items-center gap-2 w-full">
            <h3 className="font-semibold text-lg truncate">{name}</h3>
            <Badge variant={getTypeVariant(type)} className="flex-shrink-0">
              {type}
            </Badge>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Users className="w-3 h-3" />
            <span>{residents.length} residents</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function LocationCardSkeleton() {
  return (
    <Card className="w-full p-4 overflow-hidden animate-in duration-300">
      <CardContent className="p-1 flex items-center animate-pulse gap-3">
        <div className="flex flex-col items-start gap-1 text-start flex-1 min-w-0">
          <div className="flex items-center gap-2 w-full">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="w-12 h-5 rounded-full flex-shrink-0" />
          </div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardContent>
    </Card>
  );
}
