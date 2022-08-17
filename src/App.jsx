import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Footer from "./components/Footer";
import Datascience from "./pages/Datascience";
import ScrollToTop from "./components/ScrollToTop";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import GraphicDesign from "./pages/Graphicdesigning";
import WebDevelopment from "./pages/Webdevelopment";


function App() {
  document.body.style.background = '#dbf5fd';
  let colors = ['#dbf5fd'];
  // let temp = '#b2aee0';
  let i = 0;
  document.body.onclick=function(){
    ++i;
    let len = colors.length;
    i = len===i?0:i;
    document.body.style.background = colors[i]
    // document.body.style.background = document.body.style.background==='#9cdcef50'? 'blue':'#9cdcef50';
  }
  return (
    <>
      <Router>
        <ScrollToTop>
        <Navbar/>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/contact-us" exact component= {Contact}/>
          <Route path="/services" exact component= {Services}/>
          <Route path="/about-us" exact component= {About}/>
          <Route path="/careers" exact component= {Careers}/>
          <Route path="/datascience" exact component= {Datascience}/>
          <Route path="/graphic-designing" exact component= {GraphicDesign}/>
          <Route path="/web-development" exact component= {WebDevelopment}/>
          <Redirect to="/" ></Redirect>
          
        </Switch>
        <Footer/>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
