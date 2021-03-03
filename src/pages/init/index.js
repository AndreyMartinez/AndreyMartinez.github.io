import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

import Header from '../../components/header';

import aboutMe from '../../img/icons/location.svg';
import experience from '../../img/icons/experience.svg';
import knowledge from '../../img/icons/experiment.svg';

import './index.css'

function Init() {

    const handleRedirectPages = (url) => {
        window.open(url, '_blank')
    }
    return (
        <>
            <main className="main-content">
                <section className="title-content">
                    <Header />
                    <div className="title-subtitle-content">
                        <div className="title-div">
                            <h1 className="title">Raphael Andrey Martinez Velasquez</h1>
                        </div>
                        <div className="subtitle">
                            <p>Bienvenido a mi sitio, bienvenido a mi hoja de vida, bienvenido a un poco de mi.</p>
                        </div>
                        <div>
                            <button className="button">
                                <div className="content-button" onClick={() => handleRedirectPages('https://www.linkedin.com/in/raphael-martinez')}>
                                    <AiFillLinkedin className="icon" />
                                    <span className="span-text">Linkedin</span>
                                </div>
                            </button>
                            <button className="button" onClick={() => handleRedirectPages('https://github.com/AndreyMartinez')}>
                                <div className="content-button">
                                    <AiOutlineGithub className="icon" />
                                    <span className="span-text"> Github</span>
                                </div>
                            </button>
                            <button className="button" onClick={() => handleRedirectPages('https://www.instagram.com/andrey_martinez98/')}>
                                <div className="content-button">
                                    <AiOutlineInstagram className="icon" />
                                    <span className="span-text">  Instagram</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="second-section">
                    <div className="content-second-section">
                        <img className="second-part-icon" src={aboutMe} alt="aboutMe" />
                        <p className="text-second-section"> "Ser libre es gastar la mayor cantidad de tiempo de nuestra vida en aquello que nos gusta hacer" <br/>José “Pepe” Mujica</p>
                        <button className="button-second-section">Sobre mi</button>
                    </div>
                    <div className="content-second-section">
                        <img className="second-part-icon" src={experience} alt="experience" />
                        <p className="text-second-section"> "Muévete rápido y rompe objetos. Si no estás rompiendo cosas, no te estás moviendo lo suficientemente rápido.“ <br/>Mark Zuckerberg</p>
                        <button className="button-second-section">Experiencia</button>
                    </div>
                    <div className="content-second-section">
                        <img className="second-part-icon" src={knowledge} alt="knowledge" />
                        <p className="text-second-section"> "El día que dejamos de aprender, ése es el día en que morimos" <br/>Satya Nadella</p>
                        <button className="button-second-section">Conocimiento</button>
                        <p></p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Init;