import { IQuest } from '../quest.interface';

export interface IQuestsRes {
    quests: IQuest[];
    questsCount: number;
}
export interface IQuestRes {
    quest: IQuest;
}