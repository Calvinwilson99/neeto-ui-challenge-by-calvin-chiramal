import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header as NeetoUIHeader } from "neetoui/layouts";

const Header = ({ entity, setIsPaneOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <NeetoUIHeader
      menuBarToggle={() => {}}
      title={`All ${entity}`}
      actionBlock={
        <Button
          className="mr-3 rounded"
          icon={Plus}
          label={`Add ${entity}`}
          onClick={() => setIsPaneOpen(true)}
        />
      }
      searchProps={{
        onChange: e => setSearchTerm(e.target.value),
        value: searchTerm,
        placeholder: "Search Name, Email, Phone Number",
      }}
    />
  );
};

export default Header;
