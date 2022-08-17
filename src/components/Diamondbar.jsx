import React from "react";
import "./Diamondbar.css"
const Diamondbar = () => {
    return (
        <>
        <div className="flex-container">
                <div className="text-container flex-item1">
                    <img src="images/diamond.png" alt="diamond" className="flex-img" />
                    <div className="text-centered">Get a Free Quote</div>
                </div>
                <div className="text-container flex-item2">
                    <img src="images/diamond.png" alt="diamond" className="flex-img" />
                    <div className="text-centered">Learn More</div>
                </div>
                <div className="text-container flex-item3">
                    <img src="images/diamond.png" alt="diamond" className="flex-img" />
                    <div className="text-centered">Live Chat</div>
                </div>
            </div>
        </>
    );
}
export default Diamondbar;