import React from "react";

import { Check } from "neetoicons";
import { Pane, Typography, Button, Toastr } from "neetoui";

import CreateForm from "./CreateForm";

const CreatePane = ({ isPaneOpen, setIsPaneOpen }) => (
  <Pane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)}>
    <Pane.Header>
      <Typography style="h2">Add New Note</Typography>
    </Pane.Header>
    <Pane.Body>
      <CreateForm />
    </Pane.Body>
    <Pane.Footer className="flex items-center space-x-2">
      <Button
        icon={Check}
        label="Save Changes"
        onClick={() => {
          Toastr.success("Note added successfully");
          setIsPaneOpen(false);
        }}
      />
      <Button
        label="Cancel"
        style="text"
        onClick={() => setIsPaneOpen(false)}
      />
    </Pane.Footer>
  </Pane>
);

export default CreatePane;
