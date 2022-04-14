import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CleaningService = () => {
  return (
    <section className='bg-darkTan  text-primary'>
      <article className='max-w-5xl whyElida grid grid-cols-1 sm:grid-cols-2'>
        <div className='container sm:col-start-2 sm:row-start-1'>
          <h2 className='h2-title mb-3'>Why Elida's cleaning service?</h2>
          <ul className='p-text list-disc px-5'>
            <li>Celiac tousled irony 8-bit</li>
            <li>I'm baby master cleanse </li>
            <li>Cred shaman fanny pack</li>
            <li>Woke taiyaki thundercats</li>
            <li>cronut truffaut four </li>
          </ul>
          <div className='mt-8'>
            <a className='border-primary btn' href="tel:425.244.5326">Book Cleaning</a>
          </div>
        </div>
      
        <figure className='overflow-hidden sm:col-start-1 sm:row-start-1'>
          <StaticImage 
                src='../images/everdrop-gmbh-SqOMDOQb3ws-unsplash.jpg'
                alt=''
                placeholder='blurred'
                layout='fullWidth'
                className='h-full'
              />
        </figure>
      </article>
      
  </section>
  )
}

export default CleaningService