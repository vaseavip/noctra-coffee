import featuredImage from "../assets/photos/menu-midnight-espresso.webp";
import latteImage from "../assets/photos/menu-velvet-latte.webp";
import coldBrewImage from "../assets/photos/menu-cold-brew.webp";
import mochaImage from "../assets/photos/menu-ember-mocha.webp";
import cortadoImage from "../assets/photos/menu-velvet-cortado.webp";
import flatWhiteImage from "../assets/photos/menu-black-honey-flat-white.webp";
import affogatoImage from "../assets/photos/menu-noctra-affogato.webp";
import smokedCaramelImage from "../assets/photos/menu-smoked-caramel-latte.webp";
import chocolateTartImage from "../assets/photos/menu-dark-chocolate-tart.webp";
import tiramisuImage from "../assets/photos/menu-espresso-tiramisu.webp";
import cheesecakeImage from "../assets/photos/menu-burnt-basque-cheesecake.webp";
import briocheImage from "../assets/photos/menu-cinnamon-brioche.webp";

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
  {
    name: "Velvet Cortado",
    description:
      "Espresso balanced with silky steamed milk, served short and rich with a lingering caramel finish.",
    price: "€4.20",
    image: cortadoImage,
    imageAlt: "A small glass of layered espresso and milk, resting on a dark wooden table",
  },
  {
    name: "Black Honey Flat White",
    description:
      "Double espresso folded into velvety milk, with subtle notes of honey and toasted almond.",
    price: "€4.90",
    image: flatWhiteImage,
    imageAlt: "A white cup of coffee with rosetta latte art, on a wooden board",
  },
  {
    name: "Noctra Affogato",
    description: "A scoop of artisan vanilla gelato drowned in a hot shot of Midnight Espresso.",
    price: "€5.80",
    image: affogatoImage,
    imageAlt: "Top view of vanilla gelato with hot espresso poured over it in a glass",
  },
  {
    name: "Smoked Caramel Latte",
    description:
      "Espresso and steamed milk finished with smoked caramel and a delicate touch of sea salt.",
    price: "€5.40",
    image: smokedCaramelImage,
    imageAlt: "A glass mug of latte with heart-shaped latte art, on a black saucer",
  },
  {
    name: "Dark Chocolate Tart",
    description:
      "Silky dark chocolate ganache in a crisp cocoa pastry shell, finished with a touch of sea salt.",
    price: "€6.20",
    image: chocolateTartImage,
    imageAlt: "A glossy dark chocolate tart on a dark slate surface with dried flowers",
  },
  {
    name: "Espresso Tiramisu",
    description: "Classic mascarpone layered with espresso-soaked ladyfingers and dark cocoa.",
    price: "€6.50",
    image: tiramisuImage,
    imageAlt: "Top view of a tiramisu slice dusted with cocoa powder, on a grey plate",
  },
  {
    name: "Burnt Basque Cheesecake",
    description:
      "A deeply caramelized Basque cheesecake with a creamy center and subtle vanilla finish.",
    price: "€6.80",
    image: cheesecakeImage,
    imageAlt: "A slice of burnt Basque cheesecake with a caramelized top and creamy center",
  },
  {
    name: "Cinnamon Brioche",
    description: "Warm caramelized brioche with cinnamon, brown sugar and a light vanilla glaze.",
    price: "€5.90",
    image: briocheImage,
    imageAlt: "Top view of a spiral cinnamon brioche pastry on parchment paper",
  },
];
