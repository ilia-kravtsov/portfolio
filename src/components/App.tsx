import React from 'react';
import {Home} from "./Home";
import {Skills} from "./Skills";
import {Contacts} from "./Contacts";
import {Projects} from "./Projects";
import {About} from "./About";
import {Navigation} from "./Navigation";
import {Particle} from "./Particle";
import s from "../style/App.module.scss";

function App() {

    return (
        <div className={s.appContainer}>
            <main className={s.main}>
                <Particle />
                <Home/>
                <About/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <Navigation/>
        </div>
    );
}

export default App;

