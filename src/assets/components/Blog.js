import React from 'react'
import blogImg from '../images/cdc-VRpjDw3WqqI-unsplash.jpg'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Blog = () => {
  return (
    <section className='bg-dots-pattern dots-pattern bg-repeat bg-tan bg-50% sm:bg-40% md:bg-30% lg:bg-20%'>
      <article className=''>
        <div className='flex flex-col content-center container'>
          <h2 className='h2-title'>Check out our blog, Rinse and Repeat</h2>
          <article className='my-6 bg-secondary'>
          <img src={blogImg} alt='blog post image' />
          <div className='container'>
            <header className='text-2xl font-sans font-bold'>Title here</header>
            <p className='p-text'>Mumblecore 90's enamel pin deep v irony try-hard slow-carb adaptogen. Butcher irony cred, thundercats flannel hexagon drinking vinegar.
            </p>
            <p>Read More</p>
          </div>
          
          </article>
          <div className='flex'>
          <FaArrowAltCircleLeft className='text-3xl text-primary' />
          <FaArrowAltCircleRight className='ml-3 text-3xl text-primary' />
          
          </div>
        </div>
      </article>
    </section>
  )
}

export default Blog