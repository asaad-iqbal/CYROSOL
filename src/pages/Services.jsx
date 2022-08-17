import React from "react";
import Section from "../components/Section";
import Diamondbar from "../components/Diamondbar";
import Service from "../components/Services";

const Services = () => {
    return (
        <>
            <Section tagline={<>Managed IT Services<br />& Support</>} imgsrc="./images/Services.png"/>
            <Diamondbar/>
            <Service heading="Services We Offer"/>

        </>
    )
}

export default Services;

