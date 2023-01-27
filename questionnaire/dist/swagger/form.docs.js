"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.docs = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_form_req_dto_1 = require("../modules/form/dto/request/create.form.req.dto");
const create_form_res_dto_1 = require("../modules/form/dto/responce/create.form.res.dto");
const filter_form_res_dto_1 = require("../modules/form/dto/responce/filter.form.res.dto");
exports.docs = {
    findAllForms(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
        }), (0, swagger_1.ApiOkResponse)({
            description: 'EXAMPLE get all Forms',
            type: filter_form_res_dto_1.WrapFilterFormRes,
        }));
    },
    findOneForm(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
        }), (0, swagger_1.ApiOkResponse)({
            description: 'EXAMPLE findOneForm',
            type: create_form_res_dto_1.WrapCreateFormRes,
        }));
    },
    createForm(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
        }), (0, swagger_1.ApiBody)({ type: create_form_req_dto_1.CreateFormReqDto }), (0, swagger_1.ApiCreatedResponse)({
            description: 'EXAMPLE create Form',
            type: create_form_res_dto_1.WrapCreateFormRes,
        }));
    },
};
//# sourceMappingURL=form.docs.js.map