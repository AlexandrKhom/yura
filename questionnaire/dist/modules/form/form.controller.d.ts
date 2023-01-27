import { FormService } from './form.service';
import { CreateFormReqDto } from './dto/request/create.form.req.dto';
import { FormPresenter } from './form.presenter';
import { WrapCreateFormRes } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
export declare class FormController {
    private readonly formsService;
    private readonly formPres;
    constructor(formsService: FormService, formPres: FormPresenter);
    createForm(dto: CreateFormReqDto): Promise<WrapCreateFormRes>;
    findAllForms(): Promise<WrapFilterFormRes>;
    findOneForm(formId: string): Promise<WrapCreateFormRes>;
}
