import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface NavbarItem {
  name: string;
  href?: string;
  component?: AstroComponentFactory;
  children?: NavbarItem[];
}
