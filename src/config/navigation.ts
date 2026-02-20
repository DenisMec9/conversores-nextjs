export type NavigationItem = {
  href: string;
  label: string;
  description?: string;
};

export const mainNavigation: NavigationItem[] = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/conversores/moeda", label: "Moeda", description: "BRL e USD" },
  { href: "/conversores/temperatura", label: "Temperatura", description: "°C e °F" },
  { href: "/conversores/distancia", label: "Distância", description: "m, pés e polegadas" },
];

export const converterCards = mainNavigation.filter((item) => item.href.startsWith("/conversores/"));
