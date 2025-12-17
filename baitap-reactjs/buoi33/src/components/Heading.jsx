import React, { use } from 'react'
import { Appcontext } from '../ReactContext';

export default function Heading() {
    const { message, setMessage } = use(Appcontext)
    
  return (
    <div>
        <h2 className='text-2xl font-bold'>
            {message}
        </h2>
        <button onClick={() => setMessage("Học React làm gì?")}>Change Message</button>
    </div>
  )
}
