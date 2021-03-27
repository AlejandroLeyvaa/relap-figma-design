import React from 'react';

const Header = ({ userImage, userName, heroImage, path }) => {
  return (
    <header className='header'>
      <h2 className='header-logo'>RELAP</h2>
      <div className='burguer-buttom'>
        <div className='item' />
        <div className='item' />
        <div className='item' />
      </div>
    </header>
  );
};

export default Header;
