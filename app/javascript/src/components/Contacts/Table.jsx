import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS, buildColumnData } from "./constants";

const Table = ({ setIsDeleteAlertOpen }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <NeetoUITable
      rowSelection
      columnData={buildColumnData(setIsDeleteAlertOpen)}
      currentPageNumber={currentPageNumber}
      defaultPageSize={6}
      handlePageChange={setCurrentPageNumber}
      rowData={CONTACTS}
      selectedRowKeys={selectedRowKeys}
      onRowSelect={setSelectedRowKeys}
    />
  );
};

export default Table;
