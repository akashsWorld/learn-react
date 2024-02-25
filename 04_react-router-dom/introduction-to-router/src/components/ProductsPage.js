import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      <h1>This is Products page</h1>
      <Link to='/' className='decoration-none'>Go to home</Link>
    </div>
  )
}

export default ProductsPage
