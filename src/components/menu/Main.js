import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Stuff from "./pages/Stuff";
import WeatherMain from "../weather/WeatherMain";

const Main = () => {
    return (
        <HashRouter>
            <div>
                <ul className={"header"}>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/stuff"}>Stuff</NavLink></li>
                    <li><NavLink to={"/weather"}>Weather</NavLink></li>
                </ul>
                <div className={"content"}>
                    <Route exact path="/" component={Home}/>
                    <Route path={"/home"} component={Home}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route path={"/stuff"} component={Stuff}/>
                    <Route path={"/weather"} component={WeatherMain}/>
                </div>
            </div>
        </HashRouter>
    );
};
export default Main;