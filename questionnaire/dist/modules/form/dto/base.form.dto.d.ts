import { Types } from 'mongoose';
import { FormModelType } from '../types/form.model.type';
export declare class BaseFormDto implements FormModelType {
    _id: Types.ObjectId;
    firstName: string;
    phoneNumber: string;
    email: string;
    visitSpeak: string;
    companyName: string;
    serviceArea: string;
    uniqueProduct: string;
    currentWeb: string;
    needToDo: string;
    term: number;
    budget: number;
    start: string;
    aboutClients: string;
    aboutCompetitors: string;
    designWeb: string;
    elementsWeb: string;
    pagesWeb: string;
    functionalWeb: string;
    contentWeb: string[];
    forgot: string;
    chanelSpeak: string[];
    createdAt: Date;
    updatedAt: Date;
}
