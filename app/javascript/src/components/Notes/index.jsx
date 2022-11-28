import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import Header from "components/Common/Header";

import { NOTES } from "./constants";
import CreatePane from "./CreatePane";
import NavPanel from "./NavPanel";
import Note from "./Note";

const Notes = () => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header entity="Notes" setIsPaneOpen={setIsPaneOpen} />
        {NOTES.map(note => (
          <Note
            createdAt={note.createdAt}
            description={note.description}
            key={note.id}
            noteType={note.noteType}
            setIsDeleteAlertOpen={setIsDeleteAlertOpen}
            title={note.title}
          />
        ))}
      </div>
      <Alert
        closeButton={false}
        isOpen={isDeleteAlertOpen}
        message="Are you sure you want to delete the note? This action cannot be undone."
        title="Delete Note"
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={() => {
          setIsDeleteAlertOpen(false);
          Toastr.success("Note deleted successfully");
        }}
      />
      <CreatePane isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
    </div>
  );
};

export default Notes;
