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
exports.FormRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const form_mapper_1 = require("./form.mapper");
let FormRepository = class FormRepository {
    constructor(formModel, formMapper) {
        this.formModel = formModel;
        this.formMapper = formMapper;
    }
    async create(dto) {
        const newForm = await this.formModel.create(dto);
        return newForm ? this.formMapper.mapFormRepoResponse(newForm) : null;
    }
    async findAll() {
        const countAll = await this.formModel.count({});
        const allForms = await this.formModel.find();
        return allForms
            ? this.formMapper.mapManyFormRepoRes(allForms, countAll)
            : null;
    }
    async findById(formId) {
        const found = await this.formModel.findById(formId);
        return found ? this.formMapper.mapFormRepoResponse(found) : null;
    }
};
FormRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('FormModel')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        form_mapper_1.FormMapper])
], FormRepository);
exports.FormRepository = FormRepository;
//# sourceMappingURL=form.repository.js.map