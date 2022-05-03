import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import badge from '../images/icon-badge.svg'

function MessageForm() {
  const [state, handleSubmit] = useForm("mnqwqyap");
  if (state.succeeded) {
      return (
        <section className='grid-cols-1'>
          <p className='form-sent-response section-sub-title'>Thank you for contacting us!</p>
        </section>
      );
  }
  return (

        <form onSubmit={handleSubmit} className='max-w-lg flex flex-wrap pb-4 justify-center items-center'>
          <div className='flex justify-center items-center my-4 basis-full'>
            
            <h2 className='mt-6 text-4xl px-4 text-center'>How can we help you today?</h2>
          </div>
          {/* <img className='invisible quality-badge sm:visible absolute w-20 h-20 -top-10 left-1/4' src={badge} alt='quality service badge' /> */}
          <section className='flex flex-col px-4'>
            <label 
              className='mb-2 text-lg uppercase'
              htmlFor="email" 
              aria-label='your email'>
              Email Address
            </label>
            <input
              className='mb-4 h-10 bg-mediumTan border-t-4 border-solid border-primary px-4 py-4l w-96'
              aria-placeholder='enter your email'
              id="email"
              type="email" 
              name="email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label 
              aria-label='your message' 
              className='mb-2 text-lg uppercase' 
              htmlFor="message">Your message</label>
            <textarea
              aria-placeholder='enter your message here'
              className='bg-mediumTan border-t-4 border-solid border-primary px-4 py-4 w-96'
              id="message"
              name="message"
              placeholder="How can we help?"
              rows="6" 
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </section>
          <div className='flex justify-center items-center basis-full my-8'>
            <button aria-label='center justified' className='border-black border-2 w-52 rounded-full py-4'  type="submit" disabled={state.submitting}>
              Send
            </button>
          </div>
        </form>
      
  
    
  );
}
const FormSpree = () => {
  return (
    <section>
      <MessageForm />
    </section>
  );
}
export default FormSpree;