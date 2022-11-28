import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import Header from "components/Common/Header";

import CreatePane from "./CreatePane";
import NavPanel from "./NavPanel";
import Table from "./Table";

const Contacts = () => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  return (
    <div className="flex w-screen flex-row">
      <NavPanel />
      <div className="flex w-full flex-col">
        <Header entity="Contacts" setIsPaneOpen={setIsPaneOpen} />
        <Table setIsDeleteAlertOpen={setIsDeleteAlertOpen} />
      </div>
      <Alert
        closeButton={false}
        isOpen={isDeleteAlertOpen}
        message="Are you sure you want to delete contact? This action cannot be undone."
        title="Delete Contact"
        onClose={() => setIsDeleteAlertOpen(false)}
        onSubmit={() => {
          setIsDeleteAlertOpen(false);
          Toastr.success("Contact deleted successfully.");
        }}
      />
      <CreatePane isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} />
    </div>
  );
};

export default Contacts;
