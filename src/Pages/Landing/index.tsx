import React from "react";
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import totalConnectionsIcon from '../../assets/images/icons/purple-heart.svg'
import './style.css';

function Landing(){
    return (
        <div id="landing">
            <div className="container" id="landing-container">
               <div className="logo-container">
                   <img src={logoImg} alt="Logo"/>
                   <h2>Sua Plataforma de estudos online.</h2>
               </div>
                <img
                    src={landingImg}
                    alt="Landing"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <a href="" className="study"/>
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </div>
                <div className="buttons-container">
                    <a href="" className="give-classes"/>
                    <img src={giveClassesIcon} alt="Dar"/>
                    Estudar
                </div>

                <span className="total-connections">
                    Total de 200 conecxões já realizadas. <img src={totalConnectionsIcon} alt=""/>
                </span>

            </div>

        </div>
    )
}

export default Landing;
