import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "./components/Navbar/Navbar";
import './App.scss';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const changeDarkMode = setDarkMode(prev => !prev)
    return (
        <>
            <Helmet>
            <title>{"James' Portfolio"}</title>
            </Helmet>
            <div className={darkMode ? "main dark" : "main"}>
                <div className="height">
                    <Navbar changeDarkMode={changeDarkMode} darkMode={darkMode}></Navbar>
                </div>
            </div>
        </>
    )
}

export default App;