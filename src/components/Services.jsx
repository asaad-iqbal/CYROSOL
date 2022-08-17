import React from "react";
import "./Fonts.css";
import "./Services.css";
import Cards from "./Cards";

const Service = (props) => {

    return (
        <>
        <div className="services-container">
            <h1 className="service-start"> {props.start}</h1>
            <h1 className="service-heading">
            {props.heading}
            </h1>
        </div>
        <div className="container">
            <div className="row">
            <Cards image_="images/services/graphics.png" heading={<>Graphic<br/>Designing</>} link="graphic-designing" 
            text={<>Website UI<br/>Blog Images<br/>Video Editing<br/>Logo Designing<br/>Poster Designing</>}/>
            <Cards image_="images/services/data.png" heading={<>Data<br/>Science</>} link="/datascience" 
            text={<>Visualization<br/>Data Cleaning<br/>Data Extraction<br/>Machine Learning<br/>Data Augmentation</>}/>
            <Cards image_="images/services/world-wide-web.png" heading={<>Web<br/>Development</>} link="/services" 
            text={<>Commercial Websites<br/>Interactive Animations<br/>Ecommerce Application<br/>Community Web Portal<br/>Responsive Web Design</>}/>
        </div>
            <div className="row">
            <Cards image_="images/services/webscraping.png" heading={<>Web<br/>Scrapping</>} link="/services" 
            text={<>Data Mining<br/>Data Scrapper<br/>Email Extraction<br/>Cloud Scrapping<br/>Directory Scrapping</>}/>
            <Cards image_="images/services/engineering.png" heading={<>Automation</>} link="/services" 
            text={<>API Automation<br/>Email Automation<br/>Testing Automation<br/>Website Automation<br/>Automated Programs</>}/>
            <Cards image_="images/services/python.png" heading={<>Python</>} link="/services" 
            text={<>API Development<br/>GUI Development<br/>Games Development<br/>Database Integration<br/>Backend Development</>}/>
        </div>
        </div>
        </>
    );
}

export default Service;