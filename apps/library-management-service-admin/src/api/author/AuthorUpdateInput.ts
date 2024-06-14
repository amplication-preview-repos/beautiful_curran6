import { BookUpdateManyWithoutAuthorsInput } from "./BookUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  books?: BookUpdateManyWithoutAuthorsInput;
  firstName?: string | null;
  lastName?: string | null;
};
