import {
  IsArray, IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length
} from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { FormModelType } from '../types/form.model.type';

export class BaseFormDto implements FormModelType {
  @ApiProperty({ example: '99f29076-b481-4ae6-916d-6cbc4c2fc2a9' })
  _id: Types.ObjectId;

  @ApiProperty({ example: 'firstName exampleAlex', default: 'default alex' })
  @IsString()
  @Length(1, 35)
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: '+333333333333', default: '7777777' })
  @IsString()
  @Length(5, 15)
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    example: 'examplealex@gmail.com',
    default: 'defaultalex@gmail.com',
  })
  @IsString()
  @IsEmail()
  @Length(5, 35)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'visitSpeak exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  visitSpeak: string;

  @ApiProperty({ example: 'companyName exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ example: 'serviceArea exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  serviceArea: string;

  @ApiProperty({
    example: 'uniqueProduct exampleAlex',
    default: 'default alex',
  })
  @IsString()
  @IsNotEmpty()
  uniqueProduct: string;

  @ApiProperty({ example: 'currentWeb exampleAlex', default: 'default alex' })
  @IsString()
  currentWeb: string;

  @ApiProperty({ example: 'needToDo exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  needToDo: string;

  @ApiProperty({ example: 12, default: 7777777 })
  @IsNumber()
  @IsNotEmpty()
  term: number;

  @ApiProperty({ example: 999, default: 7777777 })
  @IsNumber()
  @IsNotEmpty()
  budget: number;

  @ApiProperty({ example: '2024-11-11', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  start: string;

  @ApiProperty({ example: 'aboutClients exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  aboutClients: string;

  @ApiProperty({
    example: 'aboutCompetitors exampleAlex',
    default: 'default alex',
  })
  @IsString()
  @IsNotEmpty()
  aboutCompetitors: string;

  @ApiProperty({ example: 'designWeb exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  designWeb: string;

  @ApiProperty({ example: 'elementsWeb exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  elementsWeb: string;

  @ApiProperty({ example: 'pagesWeb exampleAlex', default: 'default alex' })
  @IsString()
  @IsNotEmpty()
  pagesWeb: string;

  @ApiProperty({
    example: 'functionalWeb exampleAlex',
    default: 'default alexb',
  })
  @IsString()
  @IsNotEmpty()
  functionalWeb: string;

  @ApiProperty({
    example: ['contentWeb', 'exampleAlex'],
    default: ['default', 'alex'],
  })
  @IsArray()
  @IsNotEmpty()
  contentWeb: string[];

  @ApiProperty({ example: 'forgot exampleAlex', default: 'default alex' })
  @IsString()
  forgot: string;

  @ApiProperty({
    example: ['chanelSpeak', 'exampleAlex'],
    default: ['default', 'alex'],
  })
  @IsArray()
  @IsNotEmpty()
  chanelSpeak: string[];

  @ApiProperty({ description: 'timestamp', example: new Date() })
  createdAt: Date;

  @ApiProperty({ description: 'timestamp', example: new Date() })
  updatedAt: Date;
}
