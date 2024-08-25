import React from 'react'

const SocialLink = ({ socialLinks, parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((socialLink) => {
        const { id, href, social } = socialLink;
        return (
          <li key={id}>
            <a href={href} target="_blank" className={itemClass} rel="noreferrer">
              <i className={`fab fa-${social}`}>
              </i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLink