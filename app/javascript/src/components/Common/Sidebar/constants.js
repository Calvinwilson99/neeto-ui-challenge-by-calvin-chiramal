import { Notes, UserCircle, Inbox } from "neetoicons";

export const APP_NAME = "Notes App";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Contacts",
    to: "/settings",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Inbox,
  },
];
