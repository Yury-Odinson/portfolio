import {useContext, useEffect, useState} from "react";
import {LanguageContext, ThemeContext} from "../tools/store";
import {Link} from "react-router-dom";
import {headerLangBtn, headerNavBtns} from "../tools/dictionary";

export const Header = () => {

    const [className, setClassName] = useState<string>("");
    const [classNameBtn, setClassNameBtn] = useState<string>("");

    const langCtx = useContext(LanguageContext);
    const themeCtx = useContext(ThemeContext);

    useEffect(() => {
        if (themeCtx.theme === "light") {
            setClassName("");
            setClassNameBtn("");
        } else {
            setClassName("darkBg wClr");
            setClassNameBtn("wClr");
        }
    }, [themeCtx.theme]);

    const changeLang = () => {
        if (langCtx.lang === "ru") {
            langCtx.setLang("en");
        } else {
            langCtx.setLang("ru");
        }
    };

    const changeTheme = () => {
        if (themeCtx.theme === "light") {
            themeCtx.setTheme("darkBg wClr");
        } else {
            themeCtx.setTheme("light");
        }
    };

    return (
        <header className={className}>
            <nav>
                <div className={"nav-btns " + className}>
                    <Link to="/">
                        <button className={"nav-btn " + classNameBtn}>
                            {langCtx.lang === "ru" ? headerNavBtns.mainRu : headerNavBtns.mainEn}
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className={"nav-btn " + classNameBtn}>
                            {langCtx.lang === "ru" ? headerNavBtns.aboutRu : headerNavBtns.aboutEn}
                        </button>
                    </Link>
                    <button className={"nav-btn " + classNameBtn}>
                        {langCtx.lang === "ru" ? headerNavBtns.projectsRu : headerNavBtns.projectsEn}
                    </button>
                </div>
                <div className="nav-ctx">
                    <button className={"nav-ctx__btn " + classNameBtn} onClick={changeLang}>
                        {langCtx.lang === "ru" ? headerLangBtn.ru : headerLangBtn.en}
                    </button>
                    <p>{langCtx.lang === "ru" ? "Ночной режим:" : "Night mode:"}</p>
                    <input className="toggle" onChange={changeTheme} type="checkbox" defaultChecked={false}/>
                </div>
            </nav>
        </header>
    );
};
