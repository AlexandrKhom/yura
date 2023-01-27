import React from 'react';
// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layouts';
import { HomePage, NotFoundPage, QuestsPage, SingleQuestPage } from './pages';


function App() {
  return (
    <div>
     <Routes>
         <Route path={'/'} element={<MainLayout/>}>
             <Route index element={<Navigate to={'/home'}/>}/>
             <Route path={'home'} element={<HomePage/>}/>
             <Route path={'quests/:questId'} element={<SingleQuestPage/>}/>
             <Route path="quests" element={<QuestsPage/>}/>
             <Route path="*" element={<NotFoundPage/>}/>
         </Route>
     </Routes>
    </div>
  );
}

export default App;
