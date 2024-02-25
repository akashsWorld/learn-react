import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams();

  return (
    <div>
    <h1>This is Product Details page for Product {params.productId}</h1>
    </div>
  )
}

export default ProductDetails
