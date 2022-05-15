import React from 'react';
import './About.css';

function About() {
  return (
    <div name='about' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto text-center'>
        <div>
          <h1 className='text-5xl font-bold'>Trusted by developers across the world</h1>
          <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales neque at odio eleifend suscipit. Donec velit dolor, elementum eu.</p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2'>
          <div className='border rounded-xl shadow-xl py-8'>
            <p className='info-header'>100%</p>
            <p className='text-gray-500 py-2'>Completion</p>
          </div>
          <div className='border rounded-xl shadow-xl py-8'>
            <p className='info-header'>24/7</p>
            <p className='text-gray-500 py-2'>Delivery</p>
          </div>
          <div className='border rounded-xl shadow-xl py-8'>
            <p className='info-header'>100K</p>
            <p className='text-gray-500 py-2'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;