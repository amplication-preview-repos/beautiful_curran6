import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LoanCreateNestedManyWithoutBooksInput } from "./LoanCreateNestedManyWithoutBooksInput";

export type BookCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  isbn?: string | null;
  loans?: LoanCreateNestedManyWithoutBooksInput;
  publishDate?: Date | null;
  title?: string | null;
};
