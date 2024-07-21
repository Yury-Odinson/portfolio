import {Dispatch, SetStateAction} from "react";

export type ThemeContextType = {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
};

export type LangContextType = {
    lang: string,
    setLang: Dispatch<SetStateAction<string>>
};

export type LogoSkillProps = {
    src: string,
    alt: string
}
