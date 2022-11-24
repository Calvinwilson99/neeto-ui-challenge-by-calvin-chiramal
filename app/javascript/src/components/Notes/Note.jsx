import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Dropdown, Typography, Tag, Avatar, Tooltip } from "neetoui";
import { getTimeFromNow, getDayAndTimeFromDate } from "utils";

const { Menu, MenuItem } = Dropdown;

const Note = ({
  title,
  description,
  createdAt,
  noteType,
  setIsDeleteAlertOpen,
}) => (
  <div className="mx-4 my-2 flex flex-col border border-solid p-5 shadow">
    <div className="flex flex-row justify-between">
      <Typography style="h4">{title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
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
    </div>
    <Typography style="body2">{description}</Typography>
    <hr className="my-3" />
    <div className="flex flex-row">
      <Tag
        className="rounded"
        label="Getting Started"
        style="secondary"
        type="outline"
      />
      <div className="ml-auto mt-2 flex flex-row">
        <Clock className="mt-0.5" size={14} />
        <Tooltip content={getDayAndTimeFromDate(createdAt)} position="bottom">
          <Typography style="body3">
            {`${noteType} ${getTimeFromNow(createdAt)}`}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            imageUrl: "https://randomuser.me/api/portraits/women/74.jpg",
            name: "Eve",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
