import React from 'react'

import Header from '../../components/header';
import SocialMediaButtons from '../../components/socialMediaButtons';

import KnowledgeIcon from '../../img/knowledge.webp';

import './index.css'
function Knowledge() {
    return (
        <>
            <Header styleType="black" />
            <section className="content">
                <div className="content-initial">
                    <img src={KnowledgeIcon} alt="my-icon" className="my-icon" />
                    <div className="content-title">
                        <p className="title-name">Mi Conocimiento</p>
                        <p className="subtitle-text subtitle-size">Siempre he pensado que la educación está a un click, mi educación a sido de forma
                        autodidacta y el valor de la experiencia, conocimiento de las personas con las cuales he tenido el placer de trabajar y conocer.
                     El respeto y la responsabilidad son valores muy arraigados que tengo.</p>
                        <div className="content-button">
                            <SocialMediaButtons styleType="black" width={22} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="content section-black">
                <div className="content-text-second">
                    <p className="title-name text-white"> Frontend</p>
                    <p className="text-white subtitle-size">Soy especialista en desarrollo frontend,
                    me encanta trabajar javascript y su flexibilidad de desarrollo. Tengo conocimiento en coffeescript, handlebars,
                 Vue, Angular, React, Svelte, react native, ionic, webpack, npm, yarn, typescript, eslint, jest, karma.</p>
                    <p className="title-name text-white"> Backend</p>
                    <p className="text-white subtitle-size">También he desarrollado en  backend, trabajando con tecnologias y lenguajes
                    de programación como: java, express, node, go, graphql.</p>
                    <p className="title-name text-white"> Bases de datos</p>
                    <p className="text-white subtitle-size">También he trabajado con bases de datos, trabajando con: Mysql, Postgresql, MongoDB.</p>
                    <p className="title-name text-white">Otros servicios y tecnologias</p>
                    <p className="text-white subtitle-size">También he trabajado con servicios de nube como: Google, Ibm, Azure en proveer servicios
                    de infraestructura y consumir servicios de IOT y IA.</p>
                </div>

            </section>
        </>
    )
}

export default Knowledge
