import { CharacterCard } from "@/components/character-card";
import {
  Dialog,
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
        <SheetContent
          side={"bottom"}
          className="max-h-screen pt-10 flex flex-col"
        >
          <DialogHeader>
            <DialogTitle className="hidden">
              {character.name} details
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto">
            <CharacterCard character={character} />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="bg-gray-900/70 backdrop-blur-lg" />
      <DialogContent className="max-w-6xl mx-auto max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle className="hidden">{character.name} details</DialogTitle>
        </DialogHeader>
        <CharacterCard character={character} />
      </DialogContent>
    </Dialog>
  );
}
