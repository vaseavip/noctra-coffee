import featuredImage from "../assets/photos/menu-midnight-espresso.webp";
import latteImage from "../assets/photos/menu-velvet-latte.webp";
import coldBrewImage from "../assets/photos/menu-cold-brew.webp";
import mochaImage from "../assets/photos/menu-ember-mocha.webp";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  note?: string;
  image: string;
  imageAlt: string;
};

export const featuredItem: MenuItem = {
  name: "Midnight Espresso",
  description:
    "A dense, syrupy shot pulled from a dark-roast single origin — bitter chocolate up front, a long clove finish.",
  price: "€3.80",
  note: "Signature",
  image: featuredImage,
  imageAlt: "A single espresso shot with dark crema, resting on a black table",
};

export const secondaryItems: MenuItem[] = [
  {
    name: "Velvet Latte",
    description: "Steamed oat milk over espresso, folded until it holds its own weight.",
    price: "€4.60",
    image: latteImage,
    imageAlt: "A latte with leaf-pattern latte art, surrounded by whole coffee beans",
  },
  {
    name: "Noctra Cold Brew",
    description: "Steeped eighteen hours. Poured slow, over a single block of clear ice.",
    price: "€5.20",
    image: coldBrewImage,
    imageAlt: "A glass of dark cold brew coffee over ice, on a stone table",
  },
  {
    name: "Ember Mocha",
    description: "Dark cocoa, espresso, and a thread of smoked caramel.",
    price: "€5.60",
    image: mochaImage,
    imageAlt: "A dark mocha coffee with a thin layer of foam, dripping down a white cup",
  },
];
