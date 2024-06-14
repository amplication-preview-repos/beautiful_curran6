import { Loan } from "../loan/Loan";

export type Member = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loans?: Array<Loan>;
  updatedAt: Date;
};
