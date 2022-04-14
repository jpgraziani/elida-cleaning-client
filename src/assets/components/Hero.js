import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <section className='bg-primary text-white'>
      <article className='hero-container max-w-5xl grid grid-cols-1 sm:grid-cols-2'>
        <div className='container'>
          <h2 className='h2-title mb-3'>Residental & Commerical Claning Services in Tucson</h2>
          <p className='p-text'>Locally owned and operated for over 25 years. Customers benefit from staffing continuity that reinforces residential knowledge and confidence.</p>
          <div className='mt-8'>
            <a className='border white btn' href="tel:425.244.5326">call us now</a>
          </div>
        </div>
        
          <StaticImage 
            src='../images/yehleen-gaffney-raxI_EcyfGw-unsplash.jpg'
            alt=''
            placeholder='blurred'
            layout='fullWidth'
            className=''
          />
       
      </article>
    </section>
   
  )
}

export default Hero