import React from 'react';

import Header from '../../components/header';
import SocialMediaButtons from '../../components/socialMediaButtons';

import myIcon from '../../img/mysticker.webp';

import './index.css'

function AboutMe(props) {
    return (
        <>
            <Header style="black" />
            <section className="content">
                <div className="content-initial">
                    <img src={myIcon} alt="my-icon" className="my-icon"/>
                    <div className="content-title">
                    <p className="title-name">Raphael Andrey Martinez Velásquez</p>
                    <div className="content">
                    <SocialMediaButtons style="black" width={22}/>
                    </div>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default AboutMe;