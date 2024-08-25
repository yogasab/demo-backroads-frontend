import React from 'react'
import { pageLinks, socialLinks } from '../data'
import PageLink from '../components/PageLink';
import SocialLink from '../components/SocialLink';

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLink parentClass="footer-links" itemClass="footer-link" pageLinks={pageLinks} />
      <SocialLink socialLinks={socialLinks} parentClass="footer-icons" itemClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer