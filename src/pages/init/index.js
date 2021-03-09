import React from 'react'

import Header from '../../components/header';
import SocialMediaButtons from '../../components/socialMediaButtons';

import aboutMe from '../../img/icons/location.svg';
import experience from '../../img/icons/experience.svg';
import knowledge from '../../img/icons/experiment.svg';

import './index.css'

function Init() {

    return (
        <>
            <main className="main-content">
                <section className="title-content">
                    <Header style="white" />
                    <div className="title-subtitle-content">
                        <div className="title-div">
                            <h1 className="title">Raphael Andrey Martinez Velasquez</h1>
                        </div>
                        <div className="subtitle">
                            <p>Bienvenido a mi sitio, bienvenido a mi hoja de vida, bienvenido a un poco de mi.</p>
                        </div>
                        <div>
                            <SocialMediaButtons style="white" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Init;