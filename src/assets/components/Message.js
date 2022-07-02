import React from 'react'
import FormSpree from './FormSpree'
import './Message.css'


const Message = () => {
  return (
    <div className='message-bkg-container'>
      <div className='form-container max-w-lg flex justify-center'>
        <div className='bg-darkTan my-20'>
         <FormSpree />
        </div>
      </div>
    </div>
  )
}

export default Message

/*
image_Bkg h-screen bg-cover bg-no-repeat bg-center pt-6 
*/