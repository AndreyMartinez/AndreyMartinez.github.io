import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import PropTypes from 'prop-types'

import './index.css'

function SocialMediaButtons(props) {

    const handleRedirectPages = (url) => {
        window.open(url, '_blank')
    }
    return (
        <>
            <button className={`button ${props.style}-button`} style={{width:`${props.width ? props.width : 11}%`}} onClick={() => handleRedirectPages('https://www.linkedin.com/in/raphael-martinez')}>
                <div className="content-button">
                    <AiFillLinkedin className="icon" />
                    <span className="span-text">Linkedin</span>
                </div>
            </button>
            <button className={`button ${props.style}-button`} style={{width:`${props.width ? props.width : 11}%`}} onClick={() => handleRedirectPages('https://github.com/AndreyMartinez')}>
                <div className="content-button">
                    <AiOutlineGithub className="icon" />
                    <span className="span-text"> Github</span>
                </div>
            </button>
            <button className={`button ${props.style}-button`} style={{width:`${props.width ? props.width : 11}%`}} onClick={() => handleRedirectPages('https://www.instagram.com/andrey_martinez98/')}>
                <div className="content-button">
                    <AiOutlineInstagram className="icon" />
                    <span className="span-text">  Instagram</span>
                </div>
            </button>
        </>
    )
}

SocialMediaButtons.propsTypes = {
    style: PropTypes.oneOf(['white', 'black']).isRequired,
    width: PropTypes.number,
}

export default SocialMediaButtons;