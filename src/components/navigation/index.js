import React from 'react';
import logo from '../../../images/fucktoken-text-logo.png'

const Navigation = () =>
  (<nav>
    <img src={ logo } alt="fuck token logo"/>
    <ul>
      <li><a href="#">home</a></li>
      <li><a href="#">fuckhub</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">contact</a></li>
    </ul>
  </nav>);

export default Navigation;
