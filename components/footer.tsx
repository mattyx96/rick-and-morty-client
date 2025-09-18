import { Heart } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { Logo } from "@/components/logo";

export default function Footer() {
  const date = useMemo(
    () => `© ${new Date().getFullYear()} All rights reserved.`,
    [],
  );
  return (
    <footer className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 py-6">
          <div className="flex items-center gap-3">
            <Link href="/characters">
              <Logo className="hover:scale-110 active:scale-110 transition-transform duration-75" />
            </Link>
          </div>

          <div className="text-sm text-slate-600 flex items-center gap-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-500" aria-hidden="true" />
            <span>
              by{" "}
              <a
                href="https://gary.irongalaxy.space"
                target="_blank"
                className="text-primary font-medium underline hover:text-accent"
                rel="noopener"
              >
                {" "}
                Matteo
              </a>
            </span>
          </div>

          <div className="text-xs text-slate-500">
            <span>{date}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
