import { NavLink, Outlet } from 'react-router-dom';

import css from './MainLayout.module.css';


const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'home'}>🏠Home</NavLink>
                {/*<NavLink to={'quests'}>Results🔍</NavLink>*/}
            </div>
            <Outlet/>
        </div>
    );
};

export { MainLayout };