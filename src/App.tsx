import React, {useState} from 'react';
import {LanguageContext, ThemeContext} from "./tools/store";
import {Header} from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {MainContent} from "./components/MainContent";

function App() {

    const [theme, setTheme] = useState<string>("light");
    const [lang, setLang] = useState("en");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <LanguageContext.Provider value={{lang, setLang}}>
                <BrowserRouter>
                    <div className="App">
                        <Header/>
                        <MainContent/>
                        <footer>
                            footer
                        </footer>
                    </div>
                </BrowserRouter>
            </LanguageContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
