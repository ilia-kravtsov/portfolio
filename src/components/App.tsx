import React from 'react';
import {Home} from "./Home";
import {Skills} from "./Skills";
import {Contacts} from "./Contacts";
import {Projects} from "./Projects";
import {About} from "./About";
import {Navigation} from "./Navigation";
import s from "../style/App.module.scss";
import {Particle} from "./Particle";

function App() {

    return (
        <div className={s.app}>
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

