import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../tools/store";

export const Header = () => {

    const [className, setClassName] = useState<string>("");

    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        themeCtx.theme === "light" ? setClassName("") : setClassName("dark")
    }, [themeCtx.theme])

    const changeTheme = () => {
        if (themeCtx.theme === "light") {
            themeCtx.setTheme("dark");
        } else {
            themeCtx.setTheme("light");
        }
    };

    return (
        <header className={className}>
            <nav>
                <div className={"nav-btns " + className}>
                    <button className={"nav-btn " + className}>Main</button>
                    <button className={"nav-btn " + className}>About me</button>
                    <button className={"nav-btn " + className}>Projects</button>
                </div>
                <div className="nav-ctx">
                    <p>light/dark theme: </p>
                    <input className="toggle" onChange={changeTheme} type="checkbox" defaultChecked={false}/>
                </div>
            </nav>
        </header>
    );
};
