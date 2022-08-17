import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-logo">
                        <img src="./images/cyrosol-logo.png" alt="CYROSOL" />
                    </div>
                    <div className="footer-content">
                        {/* <div className="tablet"> */}
                        <div className="footer-info footer-info-1">
                            <h1 className="footer-heading">
                                Our Services
                            </h1>
                            <ul className="footer-list">
                                <li className="footer-li">
                                    <Link
                                        to='/graphic-designing'
                                        className='footer-links'>
                                        Graphic Designing
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link
                                        to='/web-development'
                                        className='footer-links'>
                                        Web Development
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link
                                        to='/datascience'
                                        className='footer-links'>
                                        Data Science
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-info footer-info-2">
                            <h1 className="footer-heading">
                                Important Links
                            </h1>
                            <ul className="footer-list">
                                <li className="footer-li">
                                    <Link
                                        to='/careers'
                                        className='footer-links'>
                                        Work at
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link
                                        to='/services'
                                        className='footer-links'>
                                        Services
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link
                                        to='/about-us'
                                        className='footer-links'>
                                        Why Cyrosol
                                    </Link>
                                </li>
                                <li className="footer-li">
                                    <Link
                                        to='/careers'
                                        className='footer-links'>
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* </div> */}
                        <div className="footer-info footer-info-3">
                            <h1 className="footer-heading">
                                Contact Info
                            </h1>
                            <ul className="footer-list">
                                {/* <li className="footer-li">
                            +92 
                        </li> */}
                                <li className="footer-li">
                                    <a className="footer-mail" href='mailto:support@cyrosol.com'>
                                        support@cyrosol.com
                                    </a>
                                </li>
                                {/* <li className="footer-li">
                            
                        </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="media-links">
                    <div className="facebook-icon">
                        <a href='https://www.facebook.com'>
                            <img src="./images/media/facebook.png" className='footer-icon' alt="Facebook Icon" />
                        </a>
                    </div>
                    <div className="twitter-icon">
                        <a href='https://www.twitter.com'>
                            <img src="./images/media/twitter.png" className='footer-icon' alt="Facebook Icon" />
                        </a>
                    </div>
                    <div className="email-icon">
                        <a href='mailto:support@cyrosol.com'>
                            <img src="./images/media/email.png" className='footer-icon' alt="Facebook Icon" />
                        </a>
                    </div>
                    <div className="youtube">
                        <a href='https://www.youtube.com'>
                            <img src="./images/media/youtube.png" className='footer-icon' alt="Facebook Icon" />
                        </a>
                    </div>
                    <div className="instagram">
                        <a href='https://www.instagram.com'>
                            <img src="./images/media/instagram.png" className='footer-icon' alt="Facebook Icon" />
                        </a>
                    </div>
                </div>
                <div className="last-line">
                    In case of any query, please contact us at support@cyrosol.com
                </div>
            </div>
        </>
    );
}

export default Footer;