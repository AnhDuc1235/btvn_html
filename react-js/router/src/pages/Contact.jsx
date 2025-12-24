import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact() {
  //hook mới: useNavigate
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/", {
      replace: true,
    })
  }
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={handleClick}>Go Home</button>
    </div>
  )
}
