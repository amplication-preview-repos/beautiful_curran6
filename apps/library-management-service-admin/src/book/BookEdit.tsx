import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { LoanTitle } from "../loan/LoanTitle";

export const BookEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="Author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="ISBN" source="isbn" />
        <ReferenceArrayInput
          source="loans"
          reference="Loan"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LoanTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="PublishDate" source="publishDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
