import css from './INS.module.css'
import { NavLink, useNavigate } from 'react-router-dom';

const InstructionComponent = () => {
const navigate = useNavigate();

    return (
        <div className={css.container}>
            <h3> Бриф на розробку інтернет-проєкту</h3>
            <hr/>
            <div>
                Ми хочемо оперативно і максимально точно розрахувати
                <div> терміни виконання проекту і його вартість. </div>
            </div>
            <div>
                Для цього нам потрібна детальна інформація
            </div>
            <div>
                При заповненні анкети треба відповісти на обов'язкові запитання.
            </div>
            <div>
                Усі тонкощі проєкту будуть додатково обговорені при особистій зустрічі.
            </div>
            <br/>
            <button onClick={()=> navigate('/quests')}>START</button>

        </div>
    );
};

export { InstructionComponent };