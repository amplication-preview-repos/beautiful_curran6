import { Author } from "../author/Author";
import { Category } from "../category/Category";
import { Loan } from "../loan/Loan";

export type Book = {
  author?: Author | null;
  category?: Category | null;
  createdAt: Date;
  id: string;
  isbn: string | null;
  loans?: Array<Loan>;
  publishDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
