import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import CreatePane from "./CreatePane";
import NavPanel from "./NavPanel";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header
          menuBarToggle={() => {}}
          title="All Contacts"
          actionBlock={
            <Button
              className="mr-3 rounded"
              icon={Plus}
              label="Add Contact"
              onClick={() => setIsPaneOpen(true)}
            />
          }
          searchProps={{
            onChange: e => setSearchTerm(e.target.value),
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number",
          }}
        />
        <Table />
      </div>
      <CreatePane isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
    </div>
  );
};

export default Contacts;
