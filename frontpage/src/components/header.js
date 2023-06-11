import React from 'react';
import './Header.css';

function Header() {
  return (
    <div class="topnav">
        <a class="title" href="#">
            <img src={require('./logobook.png')} alt="Logo" class="logo"/>
            <span class="title-text">Fake News Detection</span>
        </a>
        
        <a href="/about">About us</a>
        <a href="/home">Home</a>
    </div>
  );
}

export default Header;