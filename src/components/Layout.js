import React from "react";
import Header from "./Header";
import classes from "./Layout.module.scss";
import Orbiter from "../components/Orbiter";

const Layout = ({ children }) => {
    return (
        <>
            <section className="wrapper">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </section>
            <Orbiter className="backgroundAnimation" />
            <Header />
            <div className={classes.container}>{children}</div>
 
        </>
    );
};

export default Layout;
