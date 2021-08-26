import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stuff from "./pages/Stuff";

const Main = () => {
    return (
        <HashRouter>
            <div>
                <ul className={"header"}>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/stuff"}>Stuff</NavLink></li>
                </ul>
                <div className={"content"}>
                    <Route exact path="/" component={Home}/>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/stuff"} component={Stuff}/>
                </div>
            </div>
        </HashRouter>
    );
};
export default Main;