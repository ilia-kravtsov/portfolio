import React, {useState} from 'react';
import s from "../App.module.css";
import {Outlet} from "react-router-dom";
import {Navigation} from "./Navigation";

export const Layout = () => {

    return (
        <div className={s.App}>
            <main className={s.main}>
                <Outlet/>
            </main>
            <Navigation/>
        </div>
    );
};

