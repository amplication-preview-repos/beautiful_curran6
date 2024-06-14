/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LoanCreateNestedManyWithoutMembersInput } from "./LoanCreateNestedManyWithoutMembersInput";
import { Type } from "class-transformer";

@InputType()
class MemberCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LoanCreateNestedManyWithoutMembersInput,
  })
  @ValidateNested()
  @Type(() => LoanCreateNestedManyWithoutMembersInput)
  @IsOptional()
  @Field(() => LoanCreateNestedManyWithoutMembersInput, {
    nullable: true,
  })
  loans?: LoanCreateNestedManyWithoutMembersInput;
}

export { MemberCreateInput as MemberCreateInput };
