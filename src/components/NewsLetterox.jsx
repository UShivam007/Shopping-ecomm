import React from 'react'

const NewsLetterox = () => {

    const handelSubmit = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% Off</p>
        <p className='text-gray-600 mt-3' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloribus.
        </p>
        <form onSubmit={handelSubmit}
              className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email...'  className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-black text-white text-center text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterox;