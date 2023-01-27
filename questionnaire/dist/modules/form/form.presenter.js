"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormPresenter = void 0;
const common_1 = require("@nestjs/common");
let FormPresenter = class FormPresenter {
    mapFormResponse(form) {
        return {
            quest: {
                _id: form._id,
                firstName: form.firstName,
                phoneNumber: form.phoneNumber,
                email: form.email,
                chanelSpeak: form.chanelSpeak,
                visitSpeak: form.visitSpeak,
                companyName: form.companyName,
                serviceArea: form.serviceArea,
                uniqueProduct: form.uniqueProduct,
                currentWeb: form.currentWeb,
                needToDo: form.needToDo,
                term: form.term,
                budget: form.budget,
                start: form.start,
                aboutClients: form.aboutClients,
                aboutCompetitors: form.aboutCompetitors,
                designWeb: form.designWeb,
                elementsWeb: form.elementsWeb,
                pagesWeb: form.pagesWeb,
                functionalWeb: form.functionalWeb,
                contentWeb: form.contentWeb,
                forgot: form.forgot,
            },
        };
    }
    mapForMany(form) {
        return {
            _id: form._id,
            firstName: form.firstName,
            phoneNumber: form.phoneNumber,
            email: form.email,
            chanelSpeak: form.chanelSpeak,
            visitSpeak: form.visitSpeak,
            companyName: form.companyName,
            serviceArea: form.serviceArea,
            uniqueProduct: form.uniqueProduct,
            currentWeb: form.currentWeb,
            needToDo: form.needToDo,
            term: form.term,
            budget: form.budget,
            start: form.start,
            aboutClients: form.aboutClients,
            aboutCompetitors: form.aboutCompetitors,
            designWeb: form.designWeb,
            elementsWeb: form.elementsWeb,
            pagesWeb: form.pagesWeb,
            functionalWeb: form.functionalWeb,
            contentWeb: form.contentWeb,
            forgot: form.forgot,
        };
    }
    mapManyFormFilterResponse({ quests, questsCount, }) {
        const quest = quests.map((quest) => this.mapForMany(quest));
        return { quests: quest, questsCount };
    }
};
FormPresenter = __decorate([
    (0, common_1.Injectable)()
], FormPresenter);
exports.FormPresenter = FormPresenter;
//# sourceMappingURL=form.presenter.js.map