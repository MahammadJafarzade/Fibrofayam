import React from 'react'
import './Footer.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <footer>
        <div className="footer col-12 col-lg-12 col-md-12 col-xs-12">
            <div className="footer-title">
                <h1>Fibrofayam</h1>
                <p>
                    <span>
                        THE STONE COLLECTION
                    </span>
                </p>
            </div>
            <div className="footer-description">
            <div className="footer-email">
                <h2>info@fibrofayam.az</h2>
            </div>
            <div className="phone-numbers">
                <ul>
                <li>+994 55 697 97 80</li>
                <li>+994 50 337 37 28</li>
                </ul>
            </div>
            <div className="footer-icons">
                <ul>
                    <li>
                        <Link to="/">
                        <AiOutlineHome/>
                       </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <AiOutlineInstagram/>
                       </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <AiOutlineMail/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
            </div>
   </footer>
  )
}

export default Footer
