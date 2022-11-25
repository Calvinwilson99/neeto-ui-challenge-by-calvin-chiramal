import { buildSelectOptions } from "utils";

export const NOTES = [
  {
    id: 1,
    title: "Note 1",
    description:
      "She felt that chill that makes the hairs on the back of your neck when he walked into the room",
    createdAt: "2022-11-22",
    noteType: "Created",
  },
  {
    id: 2,
    title: "Note 2",
    description:
      "You should never take advice from someone who thinks red paint dries quicker than blue paint.",
    createdAt: "2022-11-23",
    noteType: "Drafted",
  },
  {
    id: 3,
    title: "Note 3",
    description:
      "The minute she landed she understood the reason this was a fly-over state.",
    createdAt: "2022-11-24",
    noteType: "Drafted",
  },
  {
    id: 4,
    title: "Note 4",
    description:
      "She had that tint of craziness in her soul that made her believe she could actually make a difference.",
    createdAt: "2022-11-24",
    noteType: "Drafted",
  },
];

export const CONTACT_DATA = buildSelectOptions([
  "Ronald Richards",
  "Jacob Jones",
]);

export const TAG_DATA = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);
