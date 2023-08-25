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
        handleResize()
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-8DMHL0ZY6D');
    }, [setDarkMode])

    const handleResize = () => {
        if (window.innerWidth < 850) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    console.log(isMobile)

    return (
        <>
            <Helmet>
            <title>{"James' Portfolio"}</title>
            </Helmet>
            <div className={isMobile? darkMode ? "mainMobile dark" : "mainMobile" : darkMode ? "main dark" : "main"}>
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