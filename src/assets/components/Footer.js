import React from 'react'

import {TiSocialInstagramCircular} from 'react-icons/ti'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className='footer-container bg-primary text-white'>
      <article className='foot-container max-w-5xl flex flex-col justify-center text-center sm:flex-row sm:flex-wrap sm:text-left sm:justify-around'>
        <div className=''>
        <h2 className='h2-title'>Elida</h2>
        <span>cleaning service</span>
          <div className='mt-8 mb-8'>
              <a className='btn' href="tel:425.244.5326">Book Cleaning</a>
          </div>
        </div>
        
      
        <ul className='mt-8 p-text sm:border-r-2 sm:border-l-2 sm:px-10 sm:border-white '>
          <li className='pt-4'><a href='#'>About</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
    
        <ul className='p-text pb-2 flex justify-center items-center pt-6'>
          <li className='mx-2'><TiSocialInstagramCircular className='text-4xl' /></li>
          <li className='mx-2'><BsFacebook className='text-3xl' /></li>
          <li className='mx-2'><AiFillTwitterCircle className='text-3xl' /></li>
        </ul>
        <div className='flex flex-col text-xs mt-6 basis-full sm:text-center'>
          <p>@copyright Elida's Cleaning Service, LLC {date}</p>
          <p><a href="https://www.graziani.dev">designed and built by graziani.dev</a></p>
        </div> 
      </article>
      
    </footer>
  )
}

export default Footer
