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
                    <span className={s.name}>
                        <span className={s.preName}>I'M ILIA </span>
                         KRAVTSOV
                    </span>
                    <div className={s.professionConatiner}>
                        <span className={s.profession}>A FRONTEND DEVELOPER</span>
                    </div>
                </div>
            </div>
    );
};

