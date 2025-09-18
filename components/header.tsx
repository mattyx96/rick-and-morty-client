"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/characters", label: "Characters" },
  { href: "/episodes", label: "Episodes" },
  { href: "/locations", label: "Locations" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full container mx-auto flex items-center justify-between px-4 py-3 md:px-0">
      {/* Logo */}
      <Link href="/characters">
        <Logo className="hover:scale-110 active:scale-110 transition-transform duration-75" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-md font-medium text-accent transition-colors hover:underline active:underline font-bangers"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-describedby="menu-button"
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-64"
          aria-describedby="menu-content"
        >
          <SheetHeader>
            <SheetTitle className="hidden">Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-4 flex flex-col space-y-4 pt-5 px-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-medium text-accent transition-colors hover:underline font-bangers"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
