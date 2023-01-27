import { Injectable } from '@nestjs/common';
import {
  CreateFormResController,
  WrapCreateFormRes,
} from './dto/responce/create.form.res.dto';
import {
  FilterFormResDto,
  WrapFilterFormRes,
} from './dto/responce/filter.form.res.dto';

@Injectable()
export class FormPresenter {
  mapFormResponse(form: CreateFormResController): WrapCreateFormRes {
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

  mapForMany(form: CreateFormResController): CreateFormResController {
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

  mapManyFormFilterResponse({
    quests,
    questsCount,
  }: WrapFilterFormRes): WrapFilterFormRes {
    const quest = quests.map((quest: FilterFormResDto) => this.mapForMany(quest));
    return { quests: quest, questsCount };
  }
}
