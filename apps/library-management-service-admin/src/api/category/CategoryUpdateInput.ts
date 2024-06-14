import { BookUpdateManyWithoutCategoriesInput } from "./BookUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  books?: BookUpdateManyWithoutCategoriesInput;
  categoryName?: string | null;
  description?: string | null;
};
