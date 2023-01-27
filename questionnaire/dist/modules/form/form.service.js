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
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const form_repository_1 = require("./form.repository");
const dotenv = require("dotenv");
const spreadsheet_1 = require("../../plugin/googleSheets/spreadsheet");
dotenv.config();
let FormService = class FormService {
    constructor(formRepo) {
        this.formRepo = formRepo;
    }
    async create(dto) {
        try {
            console.log('*******-T-R-Y-**********');
            const spreadsheet_id = process.env.SPREADSHEET_ID;
            console.log('*******************************');
            console.log(spreadsheet_id);
            console.log('*******************************');
            console.log('*******-T-R-Y-**********');
            const value_input_option = 'USER_ENTERED';
            const { googleSheets } = await (0, spreadsheet_1.getGoogleSheetConnection)();
            const test = await (0, spreadsheet_1.appendSpreadSheetValues)({
                googleSheets,
                spreadsheetId: spreadsheet_id,
                range: `lesson!A:U`,
                valueInputOption: value_input_option,
                values: [
                    [
                        dto.firstName,
                        dto.phoneNumber,
                        dto.email,
                        dto.chanelSpeak.toString(),
                        dto.visitSpeak,
                        dto.companyName,
                        dto.serviceArea,
                        dto.uniqueProduct,
                        dto.currentWeb,
                        dto.needToDo,
                        dto.term,
                        dto.budget,
                        dto.start,
                        dto.aboutClients,
                        dto.aboutCompetitors,
                        dto.designWeb,
                        dto.elementsWeb,
                        dto.pagesWeb,
                        dto.functionalWeb,
                        dto.contentWeb.toString(),
                        dto.forgot,
                    ],
                ],
            });
            console.log('*******************************');
            console.log('test = ', test);
            console.log('*******************************');
        }
        catch (e) {
            console.log(e);
        }
        finally {
            return this.formRepo.create(dto);
        }
    }
    async findAll() {
        return this.formRepo.findAll();
    }
    async findOne(formId) {
        const found = await this.formRepo.findById(formId);
        return found;
    }
};
FormService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [form_repository_1.FormRepository])
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map