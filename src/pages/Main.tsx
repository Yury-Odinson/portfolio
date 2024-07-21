import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../tools/store";
import {LogosSkills} from "../components/LogosSkills";
import avatar from "../assets/img/avatar-logo.png";

export const Main = () => {

    const [className, setClassName] = useState<string>("");

    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx.theme === "light" ? setClassName("") : setClassName("darkBg wClr");
    }, [themeCtx.theme])

    return (
        <div className={className}>
            <div className={"wrapper " + className}>
                <div className="main-info">
                    <img src={avatar} alt="avatar" width={256} height={256}/>
                    <p>Lorem</p>
                </div>

                <LogosSkills/>
            </div>
        </div>
    );
};
