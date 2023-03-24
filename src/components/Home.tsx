import React from 'react';
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={s.container}>
            <div className={s.textGreeting}>
                <span className={s.greeting}>Hey! How’s it going?</span>
                <span className={s.name}>I'm ilia kravtsov</span>
                <span className={s.profession}>a frontend developer</span>
            </div>
            <div className={s.photo}>
            </div>
        </div>
    );
};

