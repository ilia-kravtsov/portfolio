import React from 'react';
import s from './App.module.css';
import {Link, Route, Routes} from "react-router-dom";
import {Main} from "./Main";
import {Skills} from "./Skills";
import {Contacts} from "./Contacts";
import {NotFoundPage} from "./NotFoundPage";

function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
            <div className={s.header}>
                <div className={s.nav}>
                    <Link to="/"></Link>
                    <Link to="/main"></Link>
                    <Link to="/skills"></Link>
                </div>
            </div>
            <div className={s.mainContainer}>

            </div>
        </div>
    );
}

export default App;
