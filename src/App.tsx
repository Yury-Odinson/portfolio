import React, {useState} from 'react';
import {ThemeContext} from "./tools/store";
import {Header} from "./components/Header";
import {Main} from "./components/Main";

function App() {

    const [theme, setTheme] = useState<string>("light");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <div className="App">
                <Header/>
                <Main />
                <footer>
                    footer
                </footer>
            </div>
        </ThemeContext.Provider>

    );
}

export default App;
