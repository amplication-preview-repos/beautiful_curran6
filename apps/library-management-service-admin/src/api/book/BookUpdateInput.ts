import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LoanUpdateManyWithoutBooksInput } from "./LoanUpdateManyWithoutBooksInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  isbn?: string | null;
  loans?: LoanUpdateManyWithoutBooksInput;
  publishDate?: Date | null;
  title?: string | null;
};
