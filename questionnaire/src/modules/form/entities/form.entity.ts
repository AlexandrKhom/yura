import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FormModelType } from '../types/form.model.type';

@Schema()
export class FormModel implements FormModelType {
  @Prop()
  firstName: string;
  @Prop()
  phoneNumber: string;
  @Prop()
  email: string;
  @Prop()
  chanelSpeak: string[];
  @Prop()
  visitSpeak: string;
  @Prop()
  companyName: string;
  @Prop()
  serviceArea: string;
  @Prop()
  uniqueProduct: string;
  @Prop()
  currentWeb: string;
  @Prop()
  needToDo: string;
  @Prop()
  term: number;
  @Prop()
  budget: number;
  @Prop()
  start: string;
  @Prop()
  aboutClients: string;
  @Prop()
  aboutCompetitors: string;
  @Prop()
  designWeb: string;
  @Prop()
  elementsWeb: string;
  @Prop()
  pagesWeb: string;
  @Prop()
  functionalWeb: string;
  @Prop()
  contentWeb: string[];
  @Prop()
  forgot: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const FormSchema = SchemaFactory.createForClass(FormModel);
