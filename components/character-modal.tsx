import { XIcon } from "lucide-react";
import { CharacterCard } from "@/components/character-card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { isMobile } from "@/lib/utils";
import type { Character } from "@/models";

type Props = {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
};

export function CharacterDialog({
  onClose,
  isOpen,
  character,
}: Readonly<Props>) {
  if (isMobile()) {
    return (
      <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <SheetContent side={"bottom"}>
          <DialogHeader>
            <DialogTitle className="hidden">
              {character.name} details
            </DialogTitle>
          </DialogHeader>
          <CharacterCard character={character} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="bg-gray-900/70 backdrop-blur-lg" />
      <DialogContent className="max-w-6xl mx-auto">
        <DialogHeader>
          <DialogTitle>{character.name} details</DialogTitle>
        </DialogHeader>
        <CharacterCard character={character} />
      </DialogContent>
    </Dialog>
  );
}
