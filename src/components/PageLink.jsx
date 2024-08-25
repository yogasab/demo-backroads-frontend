import React from 'react'

const PageLink = ({ parentClass, itemClass, pageLinks }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {
        pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className={itemClass}>{pageLink.text}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PageLink