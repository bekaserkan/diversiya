import React from 'react'
import "./Footer.css"
import { BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer_block">
                    <a href="">Политика конфедициальности</a>
                    <h1>lUNAVI</h1>
                    <div className="icons">
                        <BsInstagram color="var(--white)" size={20} />
                        <BsWhatsapp color="var(--white)" size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer