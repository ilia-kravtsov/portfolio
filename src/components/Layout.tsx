import React from 'react';
import s from "../App.module.css";
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {

    return (
        <>
            <div className={s.header}>
                <div className={s.nav}>
                    <NavLink to="/home" className={({isActive}) =>`${isActive ? s.active : ''}`}>Home</NavLink>
                    <NavLink to="/skills" className={({isActive}) =>`${isActive ? s.active : ''}`}>Skills</NavLink>
                    <NavLink to="/projects" className={({isActive}) =>`${isActive ? s.active : ''}`}>Projects</NavLink>
                    <NavLink to="/contacts" className={({isActive}) =>`${isActive ? s.active : ''}`}>Contacts</NavLink>
                </div>
            </div>
            <main className={s.main}>
                <Outlet/>
            </main>
            <footer className={s.footer}>
                2023
            </footer>
        </>

    );
};

