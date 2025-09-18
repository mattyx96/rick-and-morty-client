import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

export function throttle<T extends (...args: any[]) => void>(
  input: T,
  timeout: number,
): (...args: Parameters<T>) => void {
  let timer: number | null = null;

  return function (...args: Parameters<T>) {
    if (!timer) {
      // @ts-expect-error this
      input.apply(this, args);
      timer = window.setTimeout(() => {
        timer = null;
      }, timeout);
    }
    // @ts-expect-error
  }.bind(this);
}
