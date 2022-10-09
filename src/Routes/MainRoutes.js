import React from 'react'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects"
import Resume from "../Pages/Resume";
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer";
import Contact from '../Pages/Contact';
import ScrollToTop from '../Components/ScrollToTop';

const MainRoutes = ()=> {
    return (
      
            <Router>
            <ScrollToTop/>
                <Header/>
                <Route exact path="/">
                    <Home/>
                 </Route>
                 <Route path="/home" component={Home}>
                    <Home/>
                 </Route>
                 <Route path="/about" component={About}>
                    <About/>
                 </Route>
                 <Route path="/projects" component={Projects}>
                    <Projects/>
                 </Route>
                 <Route path="/resume" component={Resume}>
                    <Resume/>
                 </Route>
                 <Route path="/contact" component={Contact}>
                    <Contact/>
                 </Route>
                 <Footer/>
                 </Router>
    )
}

export default MainRoutes
