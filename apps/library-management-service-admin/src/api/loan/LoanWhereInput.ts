import { BookWhereUniqueInput } from "../book/BookWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type LoanWhereInput = {
  book?: BookWhereUniqueInput;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  member?: MemberWhereUniqueInput;
  returnDate?: DateTimeNullableFilter;
  status?: "Option1";
};
