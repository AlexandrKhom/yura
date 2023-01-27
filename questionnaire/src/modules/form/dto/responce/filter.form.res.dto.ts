import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { BaseFormDto } from '../base.form.dto';

export class FilterFormResDto extends PickType(BaseFormDto, [
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

export class FilterFormResRepo extends OmitType(FilterFormResDto, [
  'updatedAt',
] as const) {}

export class FilterFormResController extends OmitType(FilterFormResRepo, [
  'createdAt',
] as const) {}

export class WrapFilterFormRes {
  @ApiProperty({ type: () => [FilterFormResController] })
  quests: FilterFormResController[];
  @ApiProperty({ type: () => Number, example: 1 })
  questsCount: number;
}
