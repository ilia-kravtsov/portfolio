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
                    <h3>JavaScript</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png?20141107110902" alt="logo" className={s.skillImg}/>
                    <span>{`console.log( 'dynamic typing' )`}</span>
                </div>
                <div className={s.skill}>
                    <h3>TS</h3>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201" alt="logo" className={s.skillImg}/>
                    <span>{`adds JavaScript static typing : string`}</span>
                </div>
                <div className={s.skill}>
                    <h3>StoryBook</h3>
                    <img src="https://iconape.com/wp-content/files/qa/371510/svg/371510.svg" alt="logo" className={s.skillImgHTML}/>
                    <span>{`a playground for UI components`}</span>
                </div>
                <div className={s.skill}>
                    <h3>Unit Testing</h3>
                    <img src="https://res.infoq.com/news/2017/02/Live-Unit-Testing/en/headerimage/GettyImages-530815244.jpg" alt="logo" className={s.skillImg}/>
                    <span>{`to validate that each unit of the software code performs as expected`}</span>
                </div>
                <div className={s.skill}>
                    <h3>React</h3>
                    <img src="https://www.svgrepo.com/show/303500/react-1-logo.svg" alt="logo" className={s.skillImg}/>
                    <span>{`<ForBuildingInteractiveUserInterfaces />`}</span>
                </div>
                <div className={s.skill}>
                    <h3>Redux</h3>
                    <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="logo" className={s.skillImgHTML}/>
                    <span>{`State management`}</span>
                </div>
            </div>
        </div>
    );
};

