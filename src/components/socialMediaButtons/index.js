import React from 'react'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import PropTypes from 'prop-types'

import './index.css'

function SocialMediaButtons(props) {

    const handleRedirectPages = (url) => {
        window.open(url, '_blank')
    }
    return (
        <div>
            <button className="button">
                <div className="content-button" onClick={() => handleRedirectPages('https://www.linkedin.com/in/raphael-martinez')}>
                    <AiFillLinkedin className="icon" />
                    <span className="span-text">Linkedin</span>
                </div>
            </button>
            <button className="button" onClick={() => handleRedirectPages('https://github.com/AndreyMartinez')}>
                <div className="content-button">
                    <AiOutlineGithub className="icon" />
                    <span className="span-text"> Github</span>
                </div>
            </button>
            <button className="button" onClick={() => handleRedirectPages('https://www.instagram.com/andrey_martinez98/')}>
                <div className="content-button">
                    <AiOutlineInstagram className="icon" />
                    <span className="span-text">  Instagram</span>
                </div>
            </button>
        </div>
    )
}

SocialMediaButtons.propsTypes = {
    style: PropTypes.oneOf(['white', 'black']).isRequired
}

export default SocialMediaButtons;