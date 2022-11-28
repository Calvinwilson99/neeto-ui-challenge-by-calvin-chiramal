import React, { useState } from "react";

import Header from "components/Common/Header";

import CreatePane from "./CreatePane";
import NavPanel from "./NavPanel";
import Table from "./Table";

const Contacts = () => {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header entity="Contacts" setIsPaneOpen={setIsPaneOpen} />
        <Table />
      </div>
      <CreatePane isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
    </div>
  );
};

export default Contacts;
