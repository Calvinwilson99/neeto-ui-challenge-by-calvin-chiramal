import React from "react";

import { Form, Formik } from "formik";
import { Input, Select } from "neetoui/formik";

const CONTACT_OPTIONS = [
  {
    value: "Ronald Richards",
    label: "Ronald Richards",
  },
  {
    value: "Jacob Jones",
    label: "Jacob Jones",
  },
];

const TAG_OPTIONS = [
  {
    value: "Getting Started",
    label: "Getting Started",
  },
  {
    value: "Onboarding",
    label: "Onboarding",
  },
  {
    value: "User Flow",
    label: "User Flow",
  },
  {
    value: "UX",
    label: "UX",
  },
  {
    value: "Bugs",
    label: "Bugs",
  },
  {
    value: "V2",
    label: "V2",
  },
];

const CreateForm = () => (
  // <div>Form is here</div>
  <Formik initialValues={{ title: "", description: "" }}>
    <Form className="w-full">
      <Input
        required
        className="my-4 w-full"
        id="title"
        label="Title"
        name="title"
        placeholder="Enter note title"
      />
      <Input
        required
        className="my-4 w-full"
        id="description"
        label="Description"
        name="description"
        placeholder="Enter note description"
      />
      <Select
        required
        className="my-4 w-full"
        id="assignedcontact"
        label="Assigned Contact"
        name="assignedcontact"
        options={CONTACT_OPTIONS}
        placeholder="Select Assigned Contact"
      />
      <Select
        required
        className="my-4 w-full"
        id="tags"
        label="Tags"
        name="tags"
        options={TAG_OPTIONS}
        placeholder="Select Tags"
      />
    </Form>
  </Formik>
);

export default CreateForm;
