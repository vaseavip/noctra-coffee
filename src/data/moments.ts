export type Moment = {
  index: string;
  title: string;
  caption: string;
  tone: "morning" | "work" | "conversation" | "evening";
};

export const moments: Moment[] = [
  {
    index: "I",
    title: "Late mornings",
    caption: "Light comes in low and stays a while.",
    tone: "morning",
  },
  {
    index: "II",
    title: "Quiet work",
    caption: "A window seat, a long black, nowhere to be.",
    tone: "work",
  },
  {
    index: "III",
    title: "Conversations",
    caption: "The kind that outlast the cup.",
    tone: "conversation",
  },
  {
    index: "IV",
    title: "Evening coffee",
    caption: "Dim light, dark roast, no rush to leave.",
    tone: "evening",
  },
];
