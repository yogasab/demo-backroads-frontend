import React from 'react'
import Title from './Title'
import { services } from '../data'
import Service from '../components/Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <Service services={services} />
    </section>
  )
}

export default Services