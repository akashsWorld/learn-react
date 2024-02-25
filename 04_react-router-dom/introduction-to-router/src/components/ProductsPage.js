import React from 'react'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  return (
    <div>
      Products
      <br/>
      <div style={{'height':'1rem'}}></div>
      <Link to='/' className='home-link'>Go to home</Link>
    </div>
  )
}

export default ProductsPage
