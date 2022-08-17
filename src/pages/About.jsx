import React from "react";
import Section from "../components/Section";
import Diamondbar from "../components/Diamondbar";
import Aboutus from "../components/Aboutus";

const About = () => {
    return (
        <>
            <Section tagline={<>Meet Your Local<br/>IT Company</>} imgsrc="./images/AboutUs.png"/>
            <Diamondbar/>
            <Aboutus heading="Why Cyrosol"
            text = {
                <>
                    Cyrosol is a leading software company.<br/>
                    Ensures quality work with on time delivery.<br/>
                    Provides software solutions all around the world.<br/>
                    Dedicated IT Team providing on demand services.<br/>
                    Highly capable of designing and engineering robust application.<br/>
                </>
            }/>

        </>
    )
}

export default About;

