import React from "react";
import "./Fonts.css";
import "./Section.css";
const Section = (props) => {

    return (
        <>
            <div className="section-container">
                <div className="items-section">
                <div className="blocks-left">
                    <img src="images/blocks.png" alt="blocks" className="blocks" width="200" />
                </div>
                <div className="main-section">
                <div className="tagline">
                    <p className="tagline-text">
                        {props.tagline}
                    </p>
                </div>
                <div className="working-img">

                    <img src={props.imgsrc} className="secion-image" alt="Working" />
                </div>
                </div>
                <div className="blocks-right">
                    <img src="images/blocks.png" alt="blocks" className="blocks" width="200" />
                </div>
                </div>
            </div>
        </>
    );
}

export default Section;