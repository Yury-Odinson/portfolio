import {LogoSkill} from "./LogoSkill";
import {logosData} from "../tools/store";

export const LogosSkills = () => {
    return (
        <div className="skills">
            <p>my skills </p>
            {logosData.map(e => (
                <LogoSkill src={e.link} alt={e.alt}/>
            ))}
        </div>
    );
};
