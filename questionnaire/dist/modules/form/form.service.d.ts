import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { FormRepository } from './form.repository';
import { CreateFormResRepo } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
export declare class FormService {
    private readonly formRepo;
    constructor(formRepo: FormRepository);
    create(dto: CreateFormReqDto): Promise<CreateFormResRepo>;
    findAll(): Promise<WrapFilterFormRes>;
    findOne(formId: string): Promise<CreateFormResRepo>;
}
