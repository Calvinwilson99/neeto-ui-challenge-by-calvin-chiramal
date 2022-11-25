import React from "react";

import { Pane, Typography } from "neetoui";

import CreateForm from "./CreateForm";

const CreatePane = ({ isPaneOpen, setIsPaneOpen }) => (
  <Pane isOpen={isPaneOpen} onClose={() => setIsPaneOpen(false)}>
    <Pane.Header>
      <Typography style="h2">Add New Note</Typography>
    </Pane.Header>
    <CreateForm setIsPaneOpen={setIsPaneOpen} />
  </Pane>
);

export default CreatePane;
