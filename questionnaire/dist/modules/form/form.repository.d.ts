import { Model } from 'mongoose';
import { FormModel } from './entities/form.entity';
import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { FormMapper } from './form.mapper';
import { CreateFormResRepo } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
export declare class FormRepository {
    private readonly formModel;
    readonly formMapper: FormMapper;
    constructor(formModel: Model<FormModel>, formMapper: FormMapper);
    create(dto: CreateFormReqDto): Promise<CreateFormResRepo>;
    findAll(): Promise<WrapFilterFormRes>;
    findById(formId: any): Promise<CreateFormResRepo>;
}
