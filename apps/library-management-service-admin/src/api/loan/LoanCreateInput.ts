import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type LoanCreateInput = {
  book?: BookWhereUniqueInput | null;
  issueDate?: Date | null;
  member?: MemberWhereUniqueInput | null;
  returnDate?: Date | null;
  status?: "Option1" | null;
};
