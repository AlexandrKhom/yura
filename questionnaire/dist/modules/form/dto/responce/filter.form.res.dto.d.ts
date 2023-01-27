import { BaseFormDto } from '../base.form.dto';
declare const FilterFormResDto_base: import("@nestjs/common").Type<Pick<BaseFormDto, "_id" | "firstName" | "phoneNumber" | "email" | "visitSpeak" | "companyName" | "serviceArea" | "uniqueProduct" | "currentWeb" | "needToDo" | "term" | "budget" | "start" | "aboutClients" | "aboutCompetitors" | "designWeb" | "elementsWeb" | "pagesWeb" | "functionalWeb" | "contentWeb" | "forgot" | "chanelSpeak" | "createdAt" | "updatedAt">>;
export declare class FilterFormResDto extends FilterFormResDto_base {
}
declare const FilterFormResRepo_base: import("@nestjs/common").Type<Omit<FilterFormResDto, "updatedAt">>;
export declare class FilterFormResRepo extends FilterFormResRepo_base {
}
declare const FilterFormResController_base: import("@nestjs/common").Type<Omit<FilterFormResRepo, "createdAt">>;
export declare class FilterFormResController extends FilterFormResController_base {
}
export declare class WrapFilterFormRes {
    quests: FilterFormResController[];
    questsCount: number;
}
export {};
