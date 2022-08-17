import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Fonts.css"
import "./Cards.css"

const Card = (props) => {
    const history = useHistory()
    const onClick = () => {
        const to = props.link;
        history.push(to);
    }
    let Class_ = props.image_.split("/")[2].slice(0,-4);
    console.log(Class_);
    let ChangeImage1 = () => {
            document.getElementsByClassName(Class_)[0].src=props.image_.slice(0,-4)+'-01.png';
    }
    let ChangeImage2 = () => {
        document.getElementsByClassName(Class_)[0].src=props.image_;
    }
    return (

        <>
        <div className="card" onClick={onClick} 
        onMouseOver={ChangeImage1}
        onMouseOut={ChangeImage2}
        >
            <div className="design">
                <img src={props.image_} alt="not-available" className={'designimg '+Class_}/>
            </div>
            <div className="content">
                <h1 className="heading">
                    {props.heading}
                </h1>
                <p className="text">
                    {props.text}
                </p>
            </div>
            <div className="btn">

            </div>
        </div>
        </>
    );
}

export default Card