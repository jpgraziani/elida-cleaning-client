import React from 'react'
import bottle from '../images/cleaning-icons_bottles-and-bucket.svg'
import kitchen from '../images/cleaning-icons_kitchen.svg'
import toilet from '../images/cleaning-icons_toilet.svg'
import stars from '../images/cleaning-icons_stars.svg'

const Services = () => {
  return (
    <section className='service-wrap bg-primary text-white text-center'>
      <article className='s-wrap container max-w-5xl flex flex-col justify-center items-center'>
        <div className='sm:max-w-lg sm:basis-full'>
          <h2 className='h2-title'>Weekly and Bi-weekly Cleaning Services</h2>
        </div>
        <section className='card-container mt-12 sm:flex sm:flex-wrap sm:justify-center  sm:items-start'>
          <article className='service-card mt-12'>
            <div className='flex items-center'>
              <div className='hr-rule' />
              <figure className='icon-container'>
                <img className='h-20 absolute top-2 left-2' src={bottle} alt='main cleaning servies' />
              </figure>
              <div className='hr-rule' />
            </div>
            <header className='header-title'>
              Bedroom, Living Room, 
              Den & common Areas
            </header>
            <p className='p-text'>Our general regular cleaning includes the bathrooms, the kitchen, the bedrooms, the living room and the office (den). Additionally dust the furniture, apply polish, dust the TVs, computers, and vacuum/mop floors.</p>
          </article>
          <article className='service-card  mt-12'>
            <div className='flex items-center'>
              <div className='hr-rule' />
              <figure className='icon-container'>
                <img className='h-20 absolute top-2' src={toilet} alt='cleaning for bathroom areas' />
              </figure>
              <div className='hr-rule' />
            </div>
            <header className='header-title'>
            Clean the bathroom
            </header>
            <p className='p-text'>Toilets, showers, tubs, sinks, mirrors, dust the light fixtures, vacuum and mop the floors.</p>
          </article>
          <article className='service-card mt-12'>
            <div className='flex items-center'>
              <div className='hr-rule' />
              <figure className='icon-container'>
                <img className='h-20 absolute' src={kitchen} alt='cleaning for kitchen area' />
              </figure>
              <div className='hr-rule' />
            </div>
            <header className='header-title'>
            Clean the Kitchen
            </header>
            <p className='p-text'>
              Clean the top of the stove, clean the inside and outside of the microwave, wipe off the outside the refrigerator and dish washer, wipe off the kitchen counters, wipe off the outside of the cabinets within a reachable distance, empty the trash cans and replace bag liners, and clean the floors.</p>
          </article>
          <article className='service-card mt-12'>
            <div div className='flex items-center'>
              <div className='hr-rule' />
              <figure className='icon-container'>
                <img className='h-20 absolute' src={stars} alt='extra services with extra charges' />
              </figure>
              <div className='hr-rule' />
            </div>
            <header className='header-title'>
            Extra services / extra charge
            </header>
            <ul className='p-text list-disc text-left'>
              <li>Clean inside the refrigerator</li>
              <li>Clean inside the oven</li>
              <li>Clean walls and doors</li>
              <li>Clean baseboards</li>
            </ul>
          </article>
        </section>
      </article>
    </section>
  )
}

export default Services