import React from 'react';
import { slide as SlideMenu } from 'react-burger-menu'

class Menu extends React.Component {


  render () {
    return (
      <SlideMenu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </SlideMenu>
    );
  }
}

export default Menu;