import { BookCreateNestedManyWithoutCategoriesInput } from "./BookCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  books?: BookCreateNestedManyWithoutCategoriesInput;
  categoryName?: string | null;
  description?: string | null;
};
