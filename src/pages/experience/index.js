import React from 'react';

import ExperienceIcon from '../../img/experience.webp'
import Header from '../../components/header';
import SocialMediaButtons from '../../components/socialMediaButtons';

import './index.css'

function Experience(props) {
    return (
        <>
        <Header styleType="black" />
        <section className="content">
            <div className="content-initial">
                <img src={ExperienceIcon} alt="my-icon" className="my-icon" />
                <div className="content-title">
                    <p className="title-name">Mi Experiencia</p>
                    <p className="subtitle-text subtitle-size">Durante casi cinco años he desempeñado profesionalmente mi carrera como desarrollador
                    de software. Diseñando, desarrollando, liderando y implementado aplicaciones web, aplicaciones móviles, aplicaciones IOT tanto de frontend como backend y
                    implementando infraestructura en la nube. Algunos proyectos en los cuales he trabajado han sido para compañias con gran representación en el
                    mercado. Como por ejemplo Positiva ARL, Amway, Banco de Occidente, Laboratorios Legrand, Hino Motors ,Ecopetrol, Grupo Aval, Gran Tierra y actualmente  Mercado Libre.</p>
                    <div className="content-button">
                        <SocialMediaButtons styleType="black" width={22} />
                    </div>
                </div>
            </div>
        </section>
        <section className="content background-meli">
            <div className="content-text-second">
                <p className="title-name "> Mercado Libre nov 2019 - actual</p>
                <ul className="subtitle-size">
                <li className="li">Planeación y desarrollo de aplicaciones web  en react.</li> 
                <li className="li">Desarrollo de aplicaciones en java</li>
                </ul>
            </div>
            {/* <img src={Vida} alt="life" className="life-img" /> */}

        </section>
        <section className="content background-periferia">
            {/* <img src={Friend} alt="friend" className="life-img" /> */}
            <div className="content-text-second">
                <p className="title-name"> Periferia nov 2018 - nov 2019</p>
                <ul className="subtitle-size">
                    <li className="li">Liderar equipos para desarrollo de aplicaciones web y móvil en react, angular ,react native, ionic.</li>
                    <li className="li">Liderar equipos para desarrollo de aplicaciones backend java, spring, node, mongodb.</li>
                </ul>
            </div>

        </section>
        <section className="content background-smartsoft">
            <div className="content-text-second">
                <p className="title-name "> Smartsoft ago 2018 - nov 2018</p>
                <ul className=" subtitle-size">
                    <li className="li">Planeación y Desarrollo de aplicaciones web en react y java</li>
               </ul>
            </div>
            {/* <img src={Mujica} alt="Mujica" className="life-img" /> */}

        </section>
        <section className="content background-conexia">
            {/* <img src={Friend} alt="friend" className="life-img" /> */}
            <div className="content-text-second">
                <p className="title-name"> Conexia nov 2017 - jul 2018</p>
                <ul className="subtitle-size">
                    <li className="li"> Planeación y desarrollo de aplicaciones móviles en ionic, angular</li>
                    <li className="li">Soporte y desarrollo de backend en lenguaje de programación java</li>
               </ul>
            </div>

        </section>
        <section className="content section-black">
            <div className="content-text-second">
                <p className="title-name text-white"> IT PROFESSIONALS ene 2016 - oct 2017</p>
                <ul className="text-white subtitle-size">
                    <li className="li"> Planeación y Desarrollo de aplicaciones web en Angular</li>
                    <li className="li"> Planeación y desarrollo de aplicaciones en Node.js</li>
                    <li className="li"> Soporte de Postgresql</li>
               </ul>
            </div>
            {/* <img src={Mujica} alt="Mujica" className="life-img" /> */}

        </section>
    </>
    )
}

export default Experience;