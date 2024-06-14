import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BookWhereInput = {
  author?: AuthorWhereUniqueInput;
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  isbn?: StringNullableFilter;
  loans?: LoanListRelationFilter;
  publishDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
