import { BookCreateNestedManyWithoutAuthorsInput } from "./BookCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  books?: BookCreateNestedManyWithoutAuthorsInput;
  firstName?: string | null;
  lastName?: string | null;
};
