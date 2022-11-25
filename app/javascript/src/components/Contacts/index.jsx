import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import NavPanel from "./NavPanel";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button className="mr-3 rounded" icon={Plus} label="Add Contact" />
          }
          searchProps={{
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number",
          }}
        />
        <Table />
      </div>
    </div>
  );
};

export default Contacts;
