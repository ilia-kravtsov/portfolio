import React from 'react';
import s from './App.module.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Skills} from "./components/Skills";
import {Contacts} from "./components/Contacts";
import {NotFoundPage} from "./NotFoundPage";
import {Layout} from "./components/Layout";
import {Projects} from "./components/Projects";

function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Navigate to="/home" replace />}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='skills' element={<Skills/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
