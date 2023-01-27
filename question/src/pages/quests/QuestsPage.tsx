import { QuestFormComponent, QuestsComponent } from '../../components';
import { useEffect, useState } from 'react';
import css from './QP.module.css';

const QuestsPage = () => {
    const [flag, setFlag] = useState(true)


    const onClickFlag = () => {
        return setFlag(!flag)
    }

    useEffect(() => {
    }, [flag])

    return (
        <div className={css.main}>
            <button onClick={()=>onClickFlag()}>{flag ? 'LOOK ALL RESULTS' : 'FILL NEW FORM'}</button>
            <div>
            {flag && <QuestFormComponent/>}
            </div>
            <div>
            {!flag && <QuestsComponent/>}
            </div>
        </div>
    );
};

export { QuestsPage };