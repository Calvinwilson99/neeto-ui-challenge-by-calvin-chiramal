import React from "react";

import { Form, Formik } from "formik";
import { Check } from "neetoicons";
import { Toastr, Pane } from "neetoui";
import { Input, Select, Button } from "neetoui/formik";

import {
  TAG_DATA,
  CONTACT_DATA,
  NOTES_FORM_VALIDATION_SCHEMA,
} from "./constants";

const CreateForm = ({ setIsPaneOpen }) => (
  <Formik
    validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    initialValues={{
      title: "",
      description: "",
      assignedcontact: null,
      tags: [],
    }}
    onSubmit={() => {
      Toastr.success("Note added successfully");
      setIsPaneOpen(false);
    }}
  >
    <Form>
      <Pane.Body>
        <Input
          required
          className="mt-4 w-full flex-grow-0"
          id="title"
          label="Title"
          name="title"
          placeholder="Enter note title"
        />
        <Input
          required
          className="mt-4 w-full flex-grow-0"
          id="description"
          label="Description"
          name="description"
          placeholder="Enter note description"
        />
        <Select
          required
          className="mt-4 w-full flex-grow-0"
          id="assignedcontact"
          label="Assigned Contact"
          name="assignedcontact"
          options={CONTACT_DATA}
          placeholder="Select Assigned Contact"
        />
        <Select
          isMulti
          required
          className="mt-4 w-full flex-grow-0"
          id="tags"
          label="Tags"
          name="tags"
          options={TAG_DATA}
          placeholder="Select Tags"
        />
      </Pane.Body>
      <Pane.Footer className="flex items-center space-x-2">
        <Button icon={Check} label="Save Changes" type="submit" />
        <Button
          disabled={false}
          label="Cancel"
          style="text"
          type="reset"
          onClick={() => setIsPaneOpen(false)}
        />
      </Pane.Footer>
    </Form>
  </Formik>
);

export default CreateForm;
