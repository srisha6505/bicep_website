import { type ClassValue, clsx } from "clsx"

export function cn(...inputs: ClassValue[]) {
  // A simple clsx wrapper, in a real scenario you would use tailwind-merge
  return clsx(inputs);
}
