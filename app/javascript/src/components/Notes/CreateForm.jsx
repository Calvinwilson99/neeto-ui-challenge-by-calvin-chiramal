import React from "react";

import { Form, Formik } from "formik";
import { Check } from "neetoicons";
import { Toastr, Pane } from "neetoui";
import { Input, Select, Button } from "neetoui/formik";
import * as Yup from "yup";

import { TAG_OPTIONS, CONTACT_OPTIONS } from "./constants";

const validationSchema = Yup.object({
  title: Yup.string().required("Title cannot be blank"),
  description: Yup.string().required("Description cannot be blank"),
  assignedcontact: Yup.object()
    .required("Please select a contact")
    .nullable()
    .shape({
      label: Yup.string().oneOf(CONTACT_OPTIONS.map(option => option.label)),
      value: Yup.string().oneOf(CONTACT_OPTIONS.map(option => option.value)),
    }),
  tags: Yup.array()
    .of(
      Yup.object().shape({
        label: Yup.string().oneOf(TAG_OPTIONS.map(option => option.label)),
        value: Yup.string().oneOf(TAG_OPTIONS.map(option => option.value)),
      })
    )
    .min(1, "Select at least 1 tag"),
});

const CreateForm = ({ setIsPaneOpen }) => (
  <Formik
    validationSchema={validationSchema}
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
          options={CONTACT_OPTIONS}
          placeholder="Select Assigned Contact"
        />
        <Select
          isMulti
          required
          className="mt-4 w-full flex-grow-0"
          id="tags"
          label="Tags"
          name="tags"
          options={TAG_OPTIONS}
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
