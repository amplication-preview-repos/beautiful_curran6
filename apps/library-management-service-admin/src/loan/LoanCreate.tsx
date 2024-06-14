import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { BookTitle } from "../book/BookTitle";
import { MemberTitle } from "../member/MemberTitle";

export const LoanCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="book.id" reference="Book" label="Book">
          <SelectInput optionText={BookTitle} />
        </ReferenceInput>
        <DateTimeInput label="IssueDate" source="issueDate" />
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <DateTimeInput label="ReturnDate" source="returnDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
