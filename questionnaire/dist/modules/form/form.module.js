"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModule = void 0;
const common_1 = require("@nestjs/common");
const form_service_1 = require("./form.service");
const form_controller_1 = require("./form.controller");
const mongoose_1 = require("@nestjs/mongoose");
const form_entity_1 = require("./entities/form.entity");
const form_repository_1 = require("./form.repository");
const form_presenter_1 = require("./form.presenter");
const form_mapper_1 = require("./form.mapper");
let FormModule = class FormModule {
};
FormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'FormModel',
                    schema: form_entity_1.FormSchema,
                },
            ]),
        ],
        controllers: [form_controller_1.FormController],
        providers: [form_service_1.FormService, form_repository_1.FormRepository, form_presenter_1.FormPresenter, form_mapper_1.FormMapper],
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map