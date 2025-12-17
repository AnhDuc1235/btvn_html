import React, { use } from 'react'
import Heading from './Heading'
import { Appcontext } from '../ReactContext'

export default function Theme() {
    const { message } = use(Appcontext)
  return (
    <div>
        <Heading/>
        <h2 className='text-2xl font-bold'>
            {message}
        </h2>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est provident explicabo nesciunt sapiente, perferendis at saepe! Et ullam, mollitia provident libero placeat ut corrupti repudiandae ducimus earum laborum aperiam omnis.</span>
    </div>
  )
}
