import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  books?: BookListRelationFilter;
  categoryName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
