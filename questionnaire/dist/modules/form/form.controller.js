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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const form_service_1 = require("./form.service");
const create_form_req_dto_1 = require("./dto/request/create.form.req.dto");
const swagger_1 = require("@nestjs/swagger");
const form_docs_1 = require("../../swagger/form.docs");
const form_presenter_1 = require("./form.presenter");
let FormController = class FormController {
    constructor(formsService, formPres) {
        this.formsService = formsService;
        this.formPres = formPres;
    }
    async createForm(dto) {
        const newForm = await this.formsService.create(dto);
        return this.formPres.mapFormResponse(newForm);
    }
    async findAllForms() {
        const allForms = await this.formsService.findAll();
        return this.formPres.mapManyFormFilterResponse(allForms);
    }
    async findOneForm(formId) {
        const found = await this.formsService.findOne(formId);
        return this.formPres.mapFormResponse(found);
    }
};
__decorate([
    (0, common_1.Post)(),
    form_docs_1.docs.createForm('create FORM'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_req_dto_1.CreateFormReqDto]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "createForm", null);
__decorate([
    (0, common_1.Get)(),
    form_docs_1.docs.findAllForms('find ALL FORMs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormController.prototype, "findAllForms", null);
__decorate([
    (0, common_1.Get)(':formId'),
    form_docs_1.docs.findOneForm('find ONE FORM'),
    __param(0, (0, common_1.Param)('formId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "findOneForm", null);
FormController = __decorate([
    (0, swagger_1.ApiTags)('Form module'),
    (0, common_1.Controller)('quests'),
    __metadata("design:paramtypes", [form_service_1.FormService,
        form_presenter_1.FormPresenter])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map