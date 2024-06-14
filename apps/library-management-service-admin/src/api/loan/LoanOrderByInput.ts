import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  bookId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  memberId?: SortOrder;
  returnDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
