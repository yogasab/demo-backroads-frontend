import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import PageLink from '../components/PageLink'
import SocialLink from '../components/SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLink parentClass="nav-links" itemClass="nav-link" pageLinks={pageLinks} />
        <SocialLink socialLinks={socialLinks} parentClass="nav-links" itemClass="nav-link" />
      </div>
    </nav >
  )
}

export default Navbar