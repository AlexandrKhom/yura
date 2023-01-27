import css from './HomePage.module.css'
import { InstructionComponent } from '../../components';

const HomePage = () => {

    return (
        <div className={css.quest}>
            <div>
            <InstructionComponent/>
            </div>
        </div>
    );
};

export { HomePage };