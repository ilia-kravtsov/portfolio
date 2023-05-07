import React from 'react';
import s from './Home.module.css'

export const Home = () => {
    return (
            <div className={s.container}>
                <div className={s.colorBlock}></div>
                <div className={s.photoWrapper}>
                    <div className={s.photo}></div>
                </div>
                <div className={s.textGreeting}>
                    <span className={s.name}>I'M ILIA KRAVTSOV</span>
                    <span className={s.profession}>FRONTEND DEVELOPER</span>
                </div>
            </div>
    );
};

