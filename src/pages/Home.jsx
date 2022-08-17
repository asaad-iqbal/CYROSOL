import React from "react";
import Aboutus from "../components/Aboutus";
import Diamondbar from "../components/Diamondbar";
import Section from "../components/Section";
import Service from "../components/Services";

const Home = () => {
    return (
        <>
            <Section tagline={<>You think, We did.</>} imgsrc="./images/main_image.png"/>
            <Diamondbar/>
            <Aboutus start="Who We Are" heading="About Us"
            text = {
                <>
                    Cyrosol is a leading software company.<br/>
                    Ensures quality work with on time delivery.<br/>
                    Provides software solutions all around the world.<br/>
                    Dedicated IT Team providing on demand services.<br/>
                    Highly capable of designing and engineering robust application.<br/>
                </>
            }/>
            <Service start="Services" heading="What We Do"/>
        </>
    )
}

export default Home;

