import React from 'react'
import fuckLogo from '../../../images/fucktoken-circle-logo.png'


const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <img src={ fuckLogo } alt="FuckToken logo"/>
      <div className="footer-links-container">
        <div>
          <p className="footer-title"> Links </p>
          <a href="#"> Home </a>
          <a href="#"> Wiki </a>
          <a href="#"> FuckHub </a>
          <a href="#"> The FUCK Manifesto </a>
          <a href="#"> Contact Us </a>
        </div>
        <div>
          <p className="footer-title"> Social </p>
          <a href="#"> Blog </a>
          <a href="#"> Twitter </a>
          <a href="#"> Reddit </a>
          <a href="#"> Telegram </a>
          <a href="#"> Discard </a>
          <a href="#"> Slack </a>
          <a href="#"> YouTube </a>
        </div>
        <div>
          <p className="footer-title"> Contact US </p>
          <p> Telegram is our official support channel: </p>
          <a className="bold-link" href="https://t.me/FuckToken"> https://t.me/FuckToken </a>
          <p> Press or other inquiries: <a href="mailto:contact@fucktoken.com">contact@fucktoken.com</a></p>
        </div>
      </div>
    </div>
  </footer>
)


export default Footer
