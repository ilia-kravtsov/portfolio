import React, { FC, useEffect, useState } from 'react';
import s from "../style/Circle.module.scss";
import { CSSProperties } from "react";
import '../style/sass/variables.scss';

export type CircleType = {
    percents: number
    title: string
}

export const Circle: FC<CircleType> = ({percents, title}) => {

    const [rerenderTrigger, setRerenderTrigger] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRerenderTrigger(prevTrigger => !prevTrigger);
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const styles: CSSProperties = {
        '--clr': '#3a5ace',
        '--num': `${percents}`
    } as React.CSSProperties;

    return (
        <div className={s.skillCircle}>
            <div className={s.percentCircle} style={styles} key={`circle-${rerenderTrigger}`}>
                <div className={s.dot}></div>
                <svg className={s.svg}>
                    <circle cx={'70'} cy={'70'} r={'70'}></circle>
                    <circle cx={'70'} cy={'70'} r={'70'}></circle>
                </svg>
                <div className={s.amount}>
                    <h3 className={s.percents}>{percents}%</h3>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

