import { Injectable } from '@nestjs/common';
import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { FormRepository } from './form.repository';
import { CreateFormResRepo } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
import * as dotenv from 'dotenv';
import { insertResultSheets } from '../../plugin/googleSheets/gsapi.plugin';
import {
  appendSpreadSheetValues,
  getGoogleSheetConnection,
} from '../../plugin/googleSheets/spreadsheet';

dotenv.config();

@Injectable()
export class FormService {
  constructor(private readonly formRepo: FormRepository) {}

  async create(dto: CreateFormReqDto): Promise<CreateFormResRepo> {
    try {
      console.log('*******-T-R-Y-**********');
      // const {
      //   firstName,
      //   phoneNumber,
      //   email,
      //   chanelSpeak,
      //   visitSpeak,
      //   companyName,
      //   serviceArea,
      //   uniqueProduct,
      //   currentWeb,
      //   needToDo,
      //   term,
      //   budget,
      //   start,
      //   aboutClients,
      //   aboutCompetitors,
      //   designWeb,
      //   elementsWeb,
      //   pagesWeb,
      //   functionalWeb,
      //   contentWeb,
      //   forgot,
      // } = dto;
      // console.log('**************');
      // console.log(dto);
      // console.log('**************');
      // const res = await insertResultSheets(
      //   firstName,
      //   phoneNumber,
      //   email,
      //   chanelSpeak,
      //   visitSpeak,
      //   companyName,
      //   serviceArea,
      //   uniqueProduct,
      //   currentWeb,
      //   needToDo,
      //   term,
      //   budget,
      //   start,
      //   aboutClients,
      //   aboutCompetitors,
      //   designWeb,
      //   elementsWeb,
      //   pagesWeb,
      //   functionalWeb,
      //   contentWeb,
      //   forgot,
      // );
      //
      // console.log('**************');
      // console.log(res);
      // console.log('**************');
      const spreadsheet_id = process.env.SPREADSHEET_ID;
      console.log('*******************************');
      console.log(spreadsheet_id);
      console.log('*******************************');
      console.log('*******-T-R-Y-**********');
      const value_input_option = 'USER_ENTERED';
      const { googleSheets } = await getGoogleSheetConnection();
      const test = await appendSpreadSheetValues({
        googleSheets,
        spreadsheetId: spreadsheet_id,
        range: `lesson!A:U`,
        valueInputOption: value_input_option,
        values: [
          [
            dto.firstName,
            dto.phoneNumber,
            dto.email,
            dto.chanelSpeak.toString(),
            dto.visitSpeak,
            dto.companyName,
            dto.serviceArea,
            dto.uniqueProduct,
            dto.currentWeb,
            dto.needToDo,
            dto.term,
            dto.budget,
            dto.start,
            dto.aboutClients,
            dto.aboutCompetitors,
            dto.designWeb,
            dto.elementsWeb,
            dto.pagesWeb,
            dto.functionalWeb,
            dto.contentWeb.toString(),
            dto.forgot,
          ],
        ],
      });

      console.log('*******************************');
      console.log('test = ', test);
      console.log('*******************************');
    } catch (e) {
      console.log(e);
    } finally {
      return this.formRepo.create(dto);
    }
  }

  async findAll(): Promise<WrapFilterFormRes> {
    return this.formRepo.findAll();
  }

  async findOne(formId: string): Promise<CreateFormResRepo> {
    const found = await this.formRepo.findById(formId);
    return found;
  }
}
