import React from "react";

import { Form, Formik } from "formik";
import { Check } from "neetoicons";
import { Toastr, Pane } from "neetoui";
import { Input, Select, Button } from "neetoui/formik";

import { ROLES_DATA, CONTACTS_FORM_VALIDATION_SCHEMA } from "./constants";

const CreateForm = ({ setIsPaneOpen }) => (
  <Formik
    validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      role: null,
    }}
    onSubmit={() => {
      Toastr.success("Contact added successfully");
      setIsPaneOpen(false);
    }}
  >
    <Form>
      <Pane.Body>
        <div className="flex w-full justify-between">
          <Input
            required
            className="mt-4 w-1/2 flex-grow-0 pr-2"
            id="firstName"
            label="First Name"
            name="firstName"
            placeholder="Enter first name"
          />
          <Input
            required
            className="mt-4 w-1/2 flex-grow-0 pl-2"
            id="lastName"
            label="Last Name"
            name="lastName"
            placeholder="Enter last name"
          />
        </div>
        <Input
          required
          className="mt-4 w-full flex-grow-0"
          id="email"
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
        />
        <Select
          required
          className="mt-4 w-full flex-grow-0"
          id="role"
          label="Role"
          name="role"
          options={ROLES_DATA}
          placeholder="Select Role"
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
