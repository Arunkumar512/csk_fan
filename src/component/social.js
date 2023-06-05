import React from 'react'

import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import "./social.css"
function social() {
    return (
        <>
            <div className="social">
                <div >
                    <a className="icon" href="https://twitter.com/ChennaiIPL">< AiFillTwitterCircle /></a>
                    <a className="icon" href="https://www.instagram.com/chennaiipl/">< AiFillInstagram /> </a>
                    <a className="icon" href="https://www.youtube.com/user/whistle4CSK/about">< AiFillYoutube /> </a>
                </div>
                <div className="reserved">
                    <AiOutlineCopyrightCircle /> CSK. All rights reserved.
                </div>
                <div className="condition">
                    <a className="condition" href="/">Terms & conditions</a>
                    <a className="condition" href="/">| Contact </a>
                    <a className="condition" href="/"> | Privacy policy </a>
                    <a className="condition" href="/"> | Disclaimer</a>
                </div>
            </div>
        </>
    )
}

export default social