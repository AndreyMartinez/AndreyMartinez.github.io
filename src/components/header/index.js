import React from 'react';
import img from '../../img/rmartinez.jpg'

import './index.css'

function Header(props) {
    return (
        <header className="header">
            <nav className="navigator">
                <ul className="list-content">
                    <li className="list">
                        <a  className="link" href="">Sobre mi</a>
                    </li>
                    <li className="list">
                        <a className="link" href="">Experiencia</a>
                    </li>
                    <li className="list">
                        <a className="link" href="">Conocimiento</a>
                    </li>
                    <li className="list">
                        <a className="link" href="">Contactame</a>
                    </li>
                </ul>
                <ul className="list-content right">
                    <li>
                    <a className="link" href="">
                        <img className="img-profile" src={img} alt="icon-raphael-martinez"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;