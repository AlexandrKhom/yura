import { QuestComponent } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppLocations } from '../../hooks';
import { FC, useEffect, useState } from 'react';
import { IQuest } from '../../types/quest.interface';
import { questService } from '../../services';
import css from './SQP.module.css';

const SingleQuestPage: FC = () => {
    const {id} = useParams<{ id: string }>();
    const {state} = useAppLocations<IQuest>();
    const [quest, setQuest] = useState<IQuest | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (state){
            setQuest(state)
        }else {
            questService.getById(id!).then(({data})=>setQuest(data))
        }
    }, [id, state])

    return (
        <div className={css.container}>
                    <button onClick={()=> navigate(-1)}>BACK</button>
            {quest&& (
                <div className={css.child}>
                    <div>Контактна особа: {quest.firstName}</div>
                    <div>номер телефону: {quest.phoneNumber}</div>
                    <div>email: {quest.email}</div>
                    <div>канал зв'язку: {quest.chanelSpeak}</div>
                    <div>робочі зустрічі: {quest.visitSpeak}</div>
                    <div>Назва компанії: {quest.companyName}</div>
                    <div>послуги чи продукт: {quest.serviceArea}</div>
                    <div>переваги бренду: {quest.uniqueProduct}</div>
                    <div>діючий сайт: {quest.currentWeb}</div>
                    <div>необхідно зробити: {quest.needToDo}</div>
                    <div>термін розробки: {quest.term}</div>
                    <div>бюджет: {quest.budget}</div>
                    <div>дедлайн: {quest.start}</div>
                    <div>відвідувачі: {quest.aboutClients}</div>
                    <div>конкуренти: {quest.aboutCompetitors}</div>
                    <div>Дизайн: {quest.designWeb}</div>
                    <div>елементи: {quest.elementsWeb}</div>
                    <div>сторінки: {quest.pagesWeb}</div>
                    <div>функціонал: {quest.functionalWeb}</div>
                    <div>контент: {quest.contentWeb}</div>
                    <div>контент: {quest.forgot}</div>
                </div>
            )}
        </div>
    );
};

export { SingleQuestPage };