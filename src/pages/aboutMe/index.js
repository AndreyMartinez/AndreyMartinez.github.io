import React from 'react';

import Header from '../../components/header';

import myIcon from '../../img/mysticker.webp';

import './index.css'

function AboutMe(props) {
    return (
        <>
            <Header style="black" />
            <section className="content">
                <div className="content-initial">
                    <img src={myIcon} alt="my-icon" className="my-icon"/>
                    <p className="title-name">Raphael Andrey Martinez Velásquez</p>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default AboutMe;