import React from 'react'

const Service = ({ services }) => {
  return (
    <div className="section-center services-center">
      {
        services.map((service) => {
          const { id, icon, title, description } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon"><i className={icon}></i></span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">
                  {description}
                </p>
              </div>
            </article>
          )
        })
      }
    </div>
  )
}

export default Service