"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapCreateFormRes = exports.CreateFormResController = exports.CreateFormResRepo = exports.CreateFormResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_form_dto_1 = require("../base.form.dto");
class CreateFormResDto extends (0, swagger_1.PickType)(base_form_dto_1.BaseFormDto, [
    '_id',
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
    'createdAt',
    'updatedAt',
]) {
}
exports.CreateFormResDto = CreateFormResDto;
class CreateFormResRepo extends (0, swagger_1.OmitType)(CreateFormResDto, [
    'updatedAt',
]) {
}
exports.CreateFormResRepo = CreateFormResRepo;
class CreateFormResController extends (0, swagger_1.OmitType)(CreateFormResRepo, [
    'createdAt',
]) {
}
exports.CreateFormResController = CreateFormResController;
class WrapCreateFormRes {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => CreateFormResController }),
    __metadata("design:type", CreateFormResController)
], WrapCreateFormRes.prototype, "quest", void 0);
exports.WrapCreateFormRes = WrapCreateFormRes;
//# sourceMappingURL=create.form.res.dto.js.map