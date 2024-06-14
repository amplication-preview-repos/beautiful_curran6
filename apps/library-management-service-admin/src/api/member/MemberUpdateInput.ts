import { LoanUpdateManyWithoutMembersInput } from "./LoanUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanUpdateManyWithoutMembersInput;
};
