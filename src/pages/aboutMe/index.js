import React from 'react';

import Header from '../../components/header';
import SocialMediaButtons from '../../components/socialMediaButtons';

import myIcon from '../../img/mysticker.webp';
import Vida from '../../img/vida.jpg';
import Friend from '../../img/friend.jpg';
import Mujica from '../../img/pepe.jpg';

import './index.css'

function AboutMe(props) {
    return (
        <>
            <Header styleType="black" />
            <section className="content">
                <div className="content-initial">
                    <img src={myIcon} alt="my-icon" className="my-icon" />
                    <div className="content-title">
                        <p className="title-name">Raphael Andrey Martinez Velásquez</p>
                        <p className="subtitle-text subtitle-size">Soy Desarrollador de software, Estudiante de Ingeniería de sistemas,
                        pero estudiante formado de manera autodidacta, llevo 5 años trabajando profesionalmente
                        en la industria de tecnología. Paralelamente me sigo formando en tecnología y gustos
                        personales como son la música y la sociología. Creo en la necesidad dar lo mejor de mí por una
                        sociedad mejor. Con una línea de código puedo hacer la vida más fácil de una persona
                       y ayudar a cuidar nuestra hermosa flora y fauna que ha sido tan golpeada. Practico atletismo y fútbol.
                        Apasionado por la libertad de hacer lo que me gusta, conocer el mundo y otras culturas mi prioridad.</p>
                        <div className="content-button">
                            <SocialMediaButtons styleType="black" width={22} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="content section-black">
                <div className="content-text-second">
                    <p className="title-name text-white"> Respeto por la vida y nuestros ecosistema</p>
                    <p className="text-white subtitle-size">La responsabilidad social que tenemos como seres humanos es muy importante,
                    es de vital importancia cuidar nuestros recursos naturales, respetar la flora y fauna del planeta, ayudar
                    a nuestra sociedad que tanto necesita un mundo mejor, con nuestro conocimiento podemos ayudar.
                    He apoyado en la educación de niños de escasos recursos y aportado en diferentes proyectos de tecnología
                    en busca de una sociedad más responsable con el ecosistema. </p>
                </div>
                <img src={Vida} alt="life" className="life-img" />

            </section>
            <section className="content">
                <img src={Friend} alt="friend" className="life-img" />
                <div className="content-text-second">
                    <p className="title-name"> Soy las personas que me rodean</p>
                    <p className="subtitle-size">En mi pequeño espacio aprovecho para dar gracias a las personas, que me corrigieron,
                    que me han hecho mejor, que me enseñan, que me brindan un consejo y su preciada amistad. Uno es las personas que
                    te rodean y he tenido el placer de trabar con grandes personas y seres humanos. Carlos, Camilos, Miguel, Andrea,
                    Juan Pablos, Oscar, Paola, Sebastian, gracias a todos y a las personas que aún falta por conocer.</p>
                </div>

            </section>
            <section className="content section-black">
                <div className="content-text-second">
                    <p className="title-name text-white"> José “Pepe” Mujica</p>
                    <p className="text-white subtitle-size">" Ser libre es gastar la mayor cantidad de tiempo de nuestra vida en aquello que nos gusta hacer" </p>
                </div>
                <img src={Mujica} alt="Mujica" className="life-img" />

            </section>
            {/* <section className="content">
                <img src={Ginni} alt="Ginni" className="life-img" />
                <div className="content-text-second">
                    <p className="title-name"> Ginni Rometty</p>
                    <p className="subtitle-size">"Si vas a crecer como persona y como líder, tienes que aprender a sentirte cómoda sintiéndote incómoda" </p>
                </div>

            </section>
            <section className="content section-black">
                <div className="content-text-second">
                    <p className="title-name text-white"> Joe Gebbia</p>
                    <p className="text-white subtitle-size">"Siempre he creído que convertir el miedo en diversión es el don de la creatividad" </p>
                </div>
                <img src={Joe} alt="Joe" className="life-img" />

            </section> */}
        </>
    )
}

export default AboutMe;