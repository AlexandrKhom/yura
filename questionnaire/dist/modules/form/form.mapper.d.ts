import { CreateFormResDto, CreateFormResRepo } from './dto/responce/create.form.res.dto';
import { FilterFormResDto, WrapFilterFormRes } from './dto/responce/filter.form.res.dto';
export declare class FormMapper {
    mapFormRepoResponse(form: CreateFormResDto): CreateFormResRepo;
    mapManyFormRepoRes(quests: FilterFormResDto[], questsCount: number): WrapFilterFormRes;
}
