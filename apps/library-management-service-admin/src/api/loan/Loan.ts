import { Book } from "../book/Book";
import { Member } from "../member/Member";

export type Loan = {
  book?: Book | null;
  createdAt: Date;
  id: string;
  issueDate: Date | null;
  member?: Member | null;
  returnDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
