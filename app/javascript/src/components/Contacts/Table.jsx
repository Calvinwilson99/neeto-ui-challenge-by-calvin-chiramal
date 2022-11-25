import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown, Avatar, Typography } from "neetoui";

const { Menu, MenuItem } = Dropdown;

const columnData = [
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
      <Dropdown
        // appendTo={() => document.body}
        buttonStyle="text"
        icon={MenuHorizontal}
        strategy="fixed"
      >
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

const rowData = [
  {
    nameRole: ["Ronald Richards", "Owner"],
    email: "ronrichards@example.com",
    createdAt: "Feb 5, 2021",
    key: 1,
    id: 1,
  },
  {
    nameRole: ["Jacob Jones", "Owner"],
    email: "jacobj@example.com",
    createdAt: "Feb 5, 2021",
    key: 2,
    id: 2,
  },
];

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  return (
    <NeetoUITable
      rowSelection
      columnData={columnData}
      currentPageNumber={1}
      defaultPageSize={2}
      rowData={rowData}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={selectedKeys => setSelectedRowKeys(selectedKeys)}
    />
  );
};

export default Table;
