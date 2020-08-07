import React from "react";
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import totalConnectionsIcon from '../../assets/images/icons/purple-heart.svg'
import './style.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg}/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={landingImg}
                    alt="Landing"
                    className="hero-image"
                />
                <div className="button-container">
                    <a href="" className="study">
                        <img src={studyIcon}/>
                        Estudar
                    </a>

                    <a href="" className="give-classes">
                        <img src={giveClassesIcon}/>
                        Estudar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas.
                    <img src={totalConnectionsIcon}/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
