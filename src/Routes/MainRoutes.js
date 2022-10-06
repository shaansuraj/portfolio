import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects"
import Resume from "../Pages/Resume";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer";
import Contact from '../Pages/Contact';

function MainRoutes() {
    return (
            <Router>
                <Header/>
                <Route exact path="/">
                    <Home/>
                 </Route>
                 <Route path="/home">
                    <Home/>
                 </Route>
                 <Route path="/about">
                    <About/>
                 </Route>
                 <Route path="/projects">
                    <Projects/>
                 </Route>
                 <Route path="/resume">
                    <Resume/>
                 </Route>
                 <Route path="/contact">
                    <Contact/>
                 </Route>
                 <Footer/>
                 
           </Router>
    )
}

export default MainRoutes
