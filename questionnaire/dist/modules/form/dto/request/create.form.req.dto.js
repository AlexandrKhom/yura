"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFormReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_form_dto_1 = require("../base.form.dto");
class CreateFormReqDto extends (0, swagger_1.PickType)(base_form_dto_1.BaseFormDto, [
    'firstName',
    'phoneNumber',
    'email',
    'chanelSpeak',
    'visitSpeak',
    'companyName',
    'serviceArea',
    'uniqueProduct',
    'currentWeb',
    'needToDo',
    'term',
    'budget',
    'start',
    'aboutClients',
    'aboutCompetitors',
    'designWeb',
    'elementsWeb',
    'pagesWeb',
    'functionalWeb',
    'contentWeb',
    'forgot',
]) {
}
exports.CreateFormReqDto = CreateFormReqDto;
//# sourceMappingURL=create.form.req.dto.js.map