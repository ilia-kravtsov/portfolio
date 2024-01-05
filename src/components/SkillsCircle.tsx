import {Circle, CircleType} from "../components/Circle";
import s from '../style/SkillsCircle.module.scss'


export const SkillsCircle = ({ percents, title }: CircleType) => {
    return (
        <div className={s.skill}>
            <Circle percents={percents} title={title} />
        </div>
    );
};

