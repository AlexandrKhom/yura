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
exports.WrapFilterFormRes = exports.FilterFormResController = exports.FilterFormResRepo = exports.FilterFormResDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_form_dto_1 = require("../base.form.dto");
class FilterFormResDto extends (0, swagger_1.PickType)(base_form_dto_1.BaseFormDto, [
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
exports.FilterFormResDto = FilterFormResDto;
class FilterFormResRepo extends (0, swagger_1.OmitType)(FilterFormResDto, [
    'updatedAt',
]) {
}
exports.FilterFormResRepo = FilterFormResRepo;
class FilterFormResController extends (0, swagger_1.OmitType)(FilterFormResRepo, [
    'createdAt',
]) {
}
exports.FilterFormResController = FilterFormResController;
class WrapFilterFormRes {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => [FilterFormResController] }),
    __metadata("design:type", Array)
], WrapFilterFormRes.prototype, "quests", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => Number, example: 1 }),
    __metadata("design:type", Number)
], WrapFilterFormRes.prototype, "questsCount", void 0);
exports.WrapFilterFormRes = WrapFilterFormRes;
//# sourceMappingURL=filter.form.res.dto.js.map