import { CreateFormResController, WrapCreateFormRes } from './dto/responce/create.form.res.dto';
import { WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
export declare class FormPresenter {
    mapFormResponse(form: CreateFormResController): WrapCreateFormRes;
    mapForMany(form: CreateFormResController): CreateFormResController;
    mapManyFormFilterResponse({ quests, questsCount, }: WrapFilterFormRes): WrapFilterFormRes;
}
