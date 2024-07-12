import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../tools/store";
import {LogosSkills} from "./LogosSkills";

export const Main = () => {

    const [className, setClassName] = useState<string>("");

    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx.theme === "light" ? setClassName("") : setClassName("dark")
    }, [themeCtx.theme])

    return (
        <main className={className}>
            <div className={"wrapper " + className}>
                <p>main</p>
                <LogosSkills/>
            </div>
        </main>
    );
};
