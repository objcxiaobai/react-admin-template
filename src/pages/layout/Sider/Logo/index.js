import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import './index.css';
function Logo() {
  return (
    <div className="sidebar-logo-container">
      <img src={logo} alt="logo" className="sidebar-logo" />
      <h1 className="sidebar-title">小白同学</h1>
    </div>
  );
}
export default Logo;
