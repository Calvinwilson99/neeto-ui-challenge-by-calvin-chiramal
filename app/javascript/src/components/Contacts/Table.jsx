import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, COLUMN_DATA } from "./constants";

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <NeetoUITable
      rowSelection
      columnData={COLUMN_DATA}
      currentPageNumber={currentPageNumber}
      defaultPageSize={6}
      handlePageChange={page => setCurrentPageNumber(page)}
      rowData={CONTACTS}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={selectedKeys => setSelectedRowKeys(selectedKeys)}
    />
  );
};

export default Table;
