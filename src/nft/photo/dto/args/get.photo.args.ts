import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetPhotoArgs {
  @Field(() => String)
  @IsNotEmpty()
  account: string;
}
