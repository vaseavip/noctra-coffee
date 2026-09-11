import morningImage from "../assets/photos/experience-late-mornings.webp";
import workImage from "../assets/photos/experience-quiet-work.webp";
import conversationImage from "../assets/photos/experience-conversations.webp";
import eveningImage from "../assets/photos/experience-evening-coffee.webp";

export type Moment = {
  index: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
};

export const moments: Moment[] = [
  {
    index: "I",
    title: "Late mornings",
    caption: "Light comes in low and stays a while.",
    image: morningImage,
    imageAlt: "A steaming mug on a wooden table, lit by low morning sun through a window",
  },
  {
    index: "II",
    title: "Quiet work",
    caption: "A window seat, a long black, nowhere to be.",
    image: workImage,
    imageAlt: "Steam rising from a mug beside an open book on a sunlit windowsill",
  },
  {
    index: "III",
    title: "Conversations",
    caption: "The kind that outlast the cup.",
    image: conversationImage,
    imageAlt: "Two steaming ceramic mugs together on a wooden table",
  },
  {
    index: "IV",
    title: "Evening coffee",
    caption: "Dim light, dark roast, no rush to leave.",
    image: eveningImage,
    imageAlt: "Close-up of dark coffee crema bubbles in a white cup",
  },
];
