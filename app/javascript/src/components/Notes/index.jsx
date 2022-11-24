import React, { useState } from "react";

import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Header } from "neetoui/layouts";

import { NOTES } from "./constants";
import NavPanel from "./NavPanel";
import Note from "./Note";

const Notes = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header
          menuBarToggle={() => {}}
          title="All Notes"
          actionBlock={
            <Button
              className="mr-3 rounded bg-gray-800 text-white"
              icon={Plus}
              label="Add Note"
            />
          }
          searchProps={{
            onChange: e => setSearchValue(e.target.value),
            value: searchValue,
            placeholder: "Search Name, Email, Phone Number",
          }}
        />
        {NOTES.map(note => (
          <Note
            createdAt={note.createdAt}
            description={note.description}
            key={note.id}
            noteType={note.noteType}
            title={note.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
