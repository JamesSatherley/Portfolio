import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import './App.scss';
import Footer from "./components/Footer/Footer";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
        window.addEventListener("resize", handleResize)
    }, [setDarkMode])

    const handleResize = () => {
        if (window.innerWidth < 850 && window.innerWidth >= 500) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    return (
        <>
            <Helmet>
            <title>{"James' Portfolio"}</title>
            </Helmet>
            <div className={darkMode ? "main dark" : "main"}>
                <div className="height">
                    <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
                    <Body darkMode={darkMode} isMobile={isMobile}/>
                    <Footer darkMode={darkMode}/>
                </div>
            </div>
        </>
    )
}

export default App;