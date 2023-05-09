import React, {FC, useState} from 'react';
import s from "../App.module.css";
import {Outlet} from "react-router-dom";
import {Navigation} from "./Navigation";
import {NavLinkBorderType} from "../App";

type LayoutType = {
    aboutBorder: NavLinkBorderType
}

export const Layout: FC<LayoutType> = ({aboutBorder}) => {

    return (
        <div className={s.App}>
            <main className={s.main}>
                <Outlet/>
            </main>
            <Navigation aboutBorder={aboutBorder}/>
        </div>
    );
};

