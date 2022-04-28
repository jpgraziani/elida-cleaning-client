import React from 'react'
import FormSpree from './FormSpree'
import badge from '../images/icon-badge.svg'

const Message = () => {
  return (
    <section className='message-container image_Bkg h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center pt-6 justify-center'>
      <img className='quality-badge w-20 h-20' src={badge} alt='quality service badge' />
      <FormSpree />
    </section>
  )
}

export default Message