import { LoanCreateNestedManyWithoutMembersInput } from "./LoanCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanCreateNestedManyWithoutMembersInput;
};
