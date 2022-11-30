import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown, Avatar, Typography } from "neetoui";
import * as yup from "yup";

import { buildSelectOptions } from "utils/index";

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

export const buildColumnData = setIsDeleteAlertOpen => [
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
          <MenuItem.Button
            style="danger"
            onClick={() => setIsDeleteAlertOpen(true)}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
    width: 100,
  },
];

export const ROLES_DATA = buildSelectOptions([
  "Owner",
  "Admin",
  "External User",
  "Project Manager",
  "Agent",
]);

export const CONTACTS_FORM_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First name cannot be blank"),
  lastName: yup.string().required("Last name cannot be blank"),
  email: yup
    .string()
    .email("Please enter a valid email id")
    .required("Email id cannot be blank"),
  role: yup
    .object()
    .required("Please select a role")
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES_DATA.map(option => option.label)),
      value: yup.string().oneOf(ROLES_DATA.map(option => option.value)),
    }),
});
