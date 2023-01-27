import { IQuest } from '../../types/quest.interface';
import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './QC.module.css';

// import { useNavigate } from 'react-router-dom';

interface IProps {
    quest: IQuest,
    children?: ReactNode
}

const QuestComponent: FC<IProps> = ({ quest }) => {
    const {
        _id,
        firstName,
        phoneNumber,
        email,
        companyName,
    } = quest;
    const navigate = useNavigate();
    return (
        <div className={css.container}>
            <div>Контактна особа: {firstName}</div>
            <div>номер телефону: {phoneNumber}</div>
            <div>email: {email}</div>
            <div>Назва компанії: {companyName}</div>
            <button onClick={() => navigate(`${_id}`, { state: quest })}>Details</button>
        </div>
    );
};

export { QuestComponent };


// firstName,
// phoneNumber,
// email,
// chanelSpeak,
// visitSpeak,
// companyName,
// serviceArea,
// uniqueProduct,
// currentWeb,
// needToDo,
// term,
// budget,
// start,
// aboutClients,
// aboutCompetitors,
// designWeb,
// elementsWeb,
// pagesWeb,
// functionalWeb,
// contentWeb,
// forgot,