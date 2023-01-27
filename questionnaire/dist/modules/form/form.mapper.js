"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormMapper = void 0;
class FormMapper {
    mapFormRepoResponse(form) {
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
            createdAt: form.createdAt,
        };
    }
    mapManyFormRepoRes(quests, questsCount) {
        const result = quests.map((quest) => this.mapFormRepoResponse(quest));
        return { quests: result, questsCount };
    }
}
exports.FormMapper = FormMapper;
//# sourceMappingURL=form.mapper.js.map