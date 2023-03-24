import React from 'react';
import s from './Skills.module.css'

export const Skills = () => {
    return (
        <div className={s.container}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>Skills set</h1>
            </div>
            <div className={s.skillsContainer}>
                <div className={s.skill}>
                    <h3>HTML</h3>
                    <img src="https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png" alt="logo" className={s.skillImgHTML}/>
                    <span>&lt;Hypertext markup language&gt;</span>
                </div>
                <div className={s.skill}>
                    <h3>CSS</h3>
                    <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="logo" className={s.skillImgHTML}/>
                    <span>{`.css { cascading style sheets }`}</span>
                </div>
                <div className={s.skillJS}>
                    <h3>JS</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="logo" className={s.skillImg}/>
                    <span>{`console.log( 'JavaScript' )`}</span>
                </div>
                <div className={s.skill}>
                    <h3>React</h3>
                    <img src="https://www.svgrepo.com/show/303500/react-1-logo.svg" alt="logo" className={s.skillImg}/>
                    <span>{`<React/>`}</span>
                </div>
                <div className={s.skill}>
                    <h3>TS</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="logo" className={s.skillImg}/>
                    <span>{`TypeScript: string`}</span>
                </div>
            </div>
        </div>
    );
};

