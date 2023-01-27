import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormModel } from './entities/form.entity';
import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { FormMapper } from './form.mapper';
import { CreateFormResRepo } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';

@Injectable()
export class FormRepository {
  constructor(
    @InjectModel('FormModel')
    private readonly formModel: Model<FormModel>,
    readonly formMapper: FormMapper,
  ) {}

  async create(dto: CreateFormReqDto): Promise<CreateFormResRepo> {
    const newForm = await this.formModel.create(dto);

    return newForm ? this.formMapper.mapFormRepoResponse(newForm) : null;
  }

  async findAll(): Promise<WrapFilterFormRes> {
    const countAll = await this.formModel.count({});
    const allForms = await this.formModel.find();
    return allForms
      ? this.formMapper.mapManyFormRepoRes(allForms, countAll)
      : null;
  }

  async findById(formId): Promise<CreateFormResRepo> {
    const found = await this.formModel.findById(formId);
    return found ? this.formMapper.mapFormRepoResponse(found) : null;
  }
}
