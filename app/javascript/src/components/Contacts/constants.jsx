import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const CONTACTS = [
  {
    nameRole: ["Ronald Richards", "Owner"],
    email: "ronrichards@example.com",
    createdAt: "Feb 5, 2021",
    id: 1,
  },
  {
    nameRole: ["Jacob Jones", "Owner"],
    email: "jacobj@example.com",
    createdAt: "Feb 5, 2021",
    id: 2,
  },
  {
    nameRole: ["Ronald Richards", "Owner"],
    email: "ronrichards@example.com",
    createdAt: "Feb 5, 2021",
    id: 3,
  },
  {
    nameRole: ["Jacob Jones", "Owner"],
    email: "jacobj@example.com",
    createdAt: "Feb 5, 2021",
    id: 4,
  },
  {
    nameRole: ["Ronald Richards", "Owner"],
    email: "ronrichards@example.com",
    createdAt: "Feb 5, 2021",
    id: 5,
  },
  {
    nameRole: ["Jacob Jones", "Owner"],
    email: "jacobj@example.com",
    createdAt: "Feb 5, 2021",
    id: 6,
  },
  {
    nameRole: ["Ronald Richards", "Owner"],
    email: "ronrichards@example.com",
    createdAt: "Feb 5, 2021",
    id: 7,
  },
  {
    nameRole: ["Jacob Jones", "Owner"],
    email: "jacobj@example.com",
    createdAt: "Feb 5, 2021",
    id: 8,
  },
];

export const COLUMN_DATA = [
  {
    dataIndex: "nameRole",
    key: "nameRole",
    title: "NAME & ROLE",
    width: 150,
    render: data => (
      <div className="flex flex-row">
        <Avatar className="mr-2" user={{ name: data[0] }} />
        <div className="flex flex-col">
          <Typography style="h5">{data[0]}</Typography>
          <Typography style="body3">{data[1]}</Typography>
        </div>
      </div>
    ),
  },
  {
    dataIndex: "email",
    key: "email",
    title: "EMAIL",
    width: 30,
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "CREATED AT",
    width: 150,
  },
  {
    dataIndex: "menuIcon",
    key: "menuIcon",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button style="danger" onClick={() => {}}>
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
    width: 100,
  },
];
