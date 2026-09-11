export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
};

export const featuredItem: MenuItem = {
  name: "Midnight Espresso",
  description:
    "A dense, syrupy shot pulled from a dark-roast single origin — bitter chocolate up front, a long clove finish.",
  price: "22 lei",
  note: "Signature",
};

export const secondaryItems: MenuItem[] = [
  {
    name: "Velvet Latte",
    description: "Steamed oat milk over espresso, folded until it holds its own weight.",
    price: "18 lei",
  },
  {
    name: "Noctra Cold Brew",
    description: "Steeped eighteen hours. Poured slow, over a single block of clear ice.",
    price: "20 lei",
  },
  {
    name: "Ember Mocha",
    description: "Dark cocoa, espresso, and a thread of smoked caramel.",
    price: "21 lei",
  },
];
