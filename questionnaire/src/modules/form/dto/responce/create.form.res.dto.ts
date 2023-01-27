import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { BaseFormDto } from '../base.form.dto';

export class CreateFormResDto extends PickType(BaseFormDto, [
  '_id',
  'firstName',
  'phoneNumber',
  'email',
  'chanelSpeak',
  'visitSpeak',
  'companyName',
  'serviceArea',
  'uniqueProduct',
  'currentWeb',
  'needToDo',
  'term',
  'budget',
  'start',
  'aboutClients',
  'aboutCompetitors',
  'designWeb',
  'elementsWeb',
  'pagesWeb',
  'functionalWeb',
  'contentWeb',
  'forgot',
  'createdAt',
  'updatedAt',
] as const) {}

export class CreateFormResRepo extends OmitType(CreateFormResDto, [
  'updatedAt',
] as const) {}

export class CreateFormResController extends OmitType(CreateFormResRepo, [
  'createdAt',
] as const) {}

export class WrapCreateFormRes {
  @ApiProperty({ type: () => CreateFormResController })
  quest: CreateFormResController;
}
