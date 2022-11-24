import React from "react";

import Logo from "images/Logo";
import { Sidebar as NeetoUISidebar } from "neetoui/layouts";

import { APP_NAME, SIDENAV_LINKS } from "./constants";

const Sidebar = () => (
  <NeetoUISidebar
    appName={APP_NAME}
    navLinks={SIDENAV_LINKS}
    organizationInfo={{
      logo: <img src={Logo} />,
      name: "Notes App",
      subdomain: "notes.example.com",
    }}
    profileInfo={{
      imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
    }}
  />
);

export default Sidebar;
