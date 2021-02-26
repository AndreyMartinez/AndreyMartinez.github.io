import React from 'react';

import './index.css'

function Header(props) {
    return (
        <header className="header">
            <nav className="navigator">
                <ul>
                    <li>
                        <a href="">Sobre mi</a>
                    </li>
                    <li>
                        <a href="">Experiencia</a>
                    </li>
                    <li>
                        <a href="">Conocimiento</a>
                    </li>
                    <li>
                        <a href="">Contactame</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;