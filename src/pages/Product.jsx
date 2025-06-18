import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

  const id= useParams({productId});

  return (
    <div>Product</div>
  )
}

export default Product