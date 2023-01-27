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
exports.BaseFormDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("mongoose");
class BaseFormDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '99f29076-b481-4ae6-916d-6cbc4c2fc2a9' }),
    __metadata("design:type", mongoose_1.Types.ObjectId)
], BaseFormDto.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'firstName exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 35),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+333333333333', default: '7777777' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 15),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'examplealex@gmail.com',
        default: 'defaultalex@gmail.com',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(5, 35),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'visitSpeak exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "visitSpeak", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'companyName exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'serviceArea exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "serviceArea", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'uniqueProduct exampleAlex',
        default: 'default alex',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "uniqueProduct", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'currentWeb exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "currentWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'needToDo exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "needToDo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12, default: 7777777 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BaseFormDto.prototype, "term", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 999, default: 7777777 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], BaseFormDto.prototype, "budget", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-11-11', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'aboutClients exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "aboutClients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'aboutCompetitors exampleAlex',
        default: 'default alex',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "aboutCompetitors", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'designWeb exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "designWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'elementsWeb exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "elementsWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'pagesWeb exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "pagesWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'functionalWeb exampleAlex',
        default: 'default alexb',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "functionalWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['contentWeb', 'exampleAlex'],
        default: ['default', 'alex'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], BaseFormDto.prototype, "contentWeb", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'forgot exampleAlex', default: 'default alex' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BaseFormDto.prototype, "forgot", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['chanelSpeak', 'exampleAlex'],
        default: ['default', 'alex'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], BaseFormDto.prototype, "chanelSpeak", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'timestamp', example: new Date() }),
    __metadata("design:type", Date)
], BaseFormDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'timestamp', example: new Date() }),
    __metadata("design:type", Date)
], BaseFormDto.prototype, "updatedAt", void 0);
exports.BaseFormDto = BaseFormDto;
//# sourceMappingURL=base.form.dto.js.map