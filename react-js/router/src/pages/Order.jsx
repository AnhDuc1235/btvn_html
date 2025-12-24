import React from 'react'
import { useParams } from 'react-router-dom'

export default function Order() {
    const { productId } = useParams()
  return (
    <div>Đặt hàng: {productId}</div>
  )
}
