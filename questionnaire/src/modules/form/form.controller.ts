import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { ApiTags } from '@nestjs/swagger';
import { docs } from '../../swagger/form.docs';
import { FormPresenter } from './form.presenter';
import { WrapCreateFormRes } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';

@ApiTags('Form module')
@Controller('quests')
export class FormController {
  constructor(
    private readonly formsService: FormService,
    private readonly formPres: FormPresenter,
  ) {}

  @Post()
  @docs.createForm('create FORM')
  async createForm(@Body() dto: CreateFormReqDto): Promise<WrapCreateFormRes> {
    const newForm = await this.formsService.create(dto);
    return this.formPres.mapFormResponse(newForm);
  }

  @Get()
  @docs.findAllForms('find ALL FORMs')
  async findAllForms(): Promise<WrapFilterFormRes> {
    const allForms = await this.formsService.findAll();
    return this.formPres.mapManyFormFilterResponse(allForms);
  }

  @Get(':formId')
  @docs.findOneForm('find ONE FORM')
  async findOneForm(@Param('formId') formId: string) {
    const found = await this.formsService.findOne(formId);
    return this.formPres.mapFormResponse(found);
  }
}
