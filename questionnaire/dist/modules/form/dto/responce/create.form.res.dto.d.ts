import { BaseFormDto } from '../base.form.dto';
declare const CreateFormResDto_base: import("@nestjs/common").Type<Pick<BaseFormDto, "_id" | "firstName" | "phoneNumber" | "email" | "visitSpeak" | "companyName" | "serviceArea" | "uniqueProduct" | "currentWeb" | "needToDo" | "term" | "budget" | "start" | "aboutClients" | "aboutCompetitors" | "designWeb" | "elementsWeb" | "pagesWeb" | "functionalWeb" | "contentWeb" | "forgot" | "chanelSpeak" | "createdAt" | "updatedAt">>;
export declare class CreateFormResDto extends CreateFormResDto_base {
}
declare const CreateFormResRepo_base: import("@nestjs/common").Type<Omit<CreateFormResDto, "updatedAt">>;
export declare class CreateFormResRepo extends CreateFormResRepo_base {
}
declare const CreateFormResController_base: import("@nestjs/common").Type<Omit<CreateFormResRepo, "createdAt">>;
export declare class CreateFormResController extends CreateFormResController_base {
}
export declare class WrapCreateFormRes {
    quest: CreateFormResController;
}
export {};
