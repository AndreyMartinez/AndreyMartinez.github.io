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
                 me encanta trabajar javascript y su flexibilidad de desarrollo. </p>
            </div>
            {/* <img src={Vida} alt="life" className="life-img" /> */}

        </section>
    </>
)
}

export default Knowledge
