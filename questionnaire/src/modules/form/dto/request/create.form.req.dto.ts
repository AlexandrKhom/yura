import { PickType } from '@nestjs/swagger';
import { BaseFormDto } from '../base.form.dto';

export class CreateFormReqDto extends PickType(BaseFormDto, [
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
] as const) {}
