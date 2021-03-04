import React from 'react';

import Header from '../../components/header';

import myIcon from '../../img/mysticker.webp'

function AboutMe(props) {
    return (
        <>
            <Header style="black" />
            <section>
                <div>
                    <img src={myIcon} alt="my-icon" />
                    <p>Raphael Andrey Martinez Velásquez</p>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default AboutMe;