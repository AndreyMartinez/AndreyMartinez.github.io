import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai'

import Header from '../../components/header'

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
                        <div className="title">
                            <h1>Raphael Andrey Martinez Velasquez</h1>
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
                <section>
                </section>
            </main>
        </>
    )
}

export default Init;