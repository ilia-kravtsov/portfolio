import React from 'react';
import {Home} from "./components/Home";
import {Skills} from "./components/Skills";
import {Contacts} from "./components/Contacts";
import {Projects} from "./components/Projects";
import {Navigate, Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout";
import {About} from "./components/About";

function App() {
    return (
        <>
            <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/portfolio' element={<Navigate to="/home" />} />
                        <Route path='home' element={<Home/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='skills' element={<Skills/>}/>
                        <Route path='projects' element={<Projects/>}/>
                        <Route path='contacts' element={<Contacts/>}/>
                    </Route>
            </Routes>
        </>
    );
}

export default App;


/*
   <div className={s.contactMe}>
                    <h2 className={s.titleContact}>I consider options for remote work</h2>
                    <NavHashLink smooth to='#contacts' className={s.linkContacts}>Contact me</NavHashLink>
                </div>
                456
 */

/*
<footer className={s.footer}>
                <h3 className={s.footerHeader}>add me to your friends</h3>
                <div className={s.footerIconsContainer}>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/512px-Facebook_F_icon.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://t.me/Ilia_melbourne' target='_blank' rel="noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png?20220101141644"
                            alt="facebook logo" className={s.footerLogo}/>
                    </a>
                    <a href='https://www.linkedin.com/in/-ilia-kravtsov' target='_blank' rel="noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/200px-Linkedin.svg.png"
                             alt="linkedin logo" className={s.footerLogo}/>
                    </a>
                </div>
                <span>© All rights reserved</span>
            </footer>
 */