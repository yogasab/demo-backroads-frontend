import React from 'react'
import Title from './Title'
import { tours } from '../data'
import Tour from '../components/Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <Tour tours={tours} />
    </section>
  )
}

export default Tours