import React from "react";
import "./Fonts.css";
import "./Aboutus.css";

const Aboutus = (props) => {

    return (
        <>
        <div className="headings-container">
            <h1 className="heading-start"> {props.start}</h1>
            <h1 className="heading-heading">
            {props.heading}
            </h1>
        </div>
        <div className="aboutcontainer">
            <div className="abouttext">
                {props.text}
            </div>
            <div className="aboutimage">
                <img src="images/About.png" alt="" className="aboutusimage" />
            </div>
        </div>
        </>
    );
}

export default Aboutus;