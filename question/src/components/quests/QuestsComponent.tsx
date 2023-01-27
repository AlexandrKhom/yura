import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { questActions } from '../../redux';
import { QuestComponent } from '../quest/QuestComponent';
import css from './QSC.module.css';

const QuestsComponent: FC = () => {
    const { quests } = useAppSelector(state => state.quests);
    const { questsCount } = useAppSelector(state => state.quests);
    const dispatch = useAppDispatch();

    console.log('quests = ', quests)
    console.log('questsCount = ', questsCount)

    useEffect(() => {
        dispatch(questActions.getAll())
    }, [dispatch])

    return (
        <div>
            <h2>TOTAL: {questsCount}</h2>
            <div className={css.container}>
                    {quests.map(quest => <QuestComponent key={quest._id} quest={quest}/>)}
            </div>
        </div>
    );
};

export { QuestsComponent };