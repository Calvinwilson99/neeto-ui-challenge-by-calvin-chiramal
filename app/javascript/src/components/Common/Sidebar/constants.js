import { Text, UserCircle, Inbox } from "neetoicons";

export const APP_NAME = "Notes App";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Text,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Inbox,
  },
];
