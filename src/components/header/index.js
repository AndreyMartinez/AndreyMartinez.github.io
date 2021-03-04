import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import img from '../../img/rmartinez.jpg'

import './index.css'

function Header(props) {
    return (
        <header className={`header ${props.style}`}>
            <nav className="navigator">
                <ul className="list-content">
                    <li className="list">
                        <NavLink className="link" to="/aboutMe">Sobre mi</NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact className="link" to="/">Experiencia</NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact className="link" to="/">Conocimiento</NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact className="link" to="/">Contactame</NavLink>
                    </li>
                </ul>
                <ul className="list-content right">
                    <li>
                        <NavLink exact className="link" to="/">
                            <img className="img-profile" src={img} alt="icon-raphael-martinez" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
Header.propTypes = {
    style: PropTypes.oneOf(['black', 'white']).isRequired
}

export default Header;