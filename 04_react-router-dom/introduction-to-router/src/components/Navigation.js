import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='nav'>
      <ul>
        <Link to='/home' className='decoration-none'><li className='nav-elements'>Home</li></Link>
        <Link to='/products' className='decoration-none'><li className='nav-elements'>Products</li></Link>
      </ul>
    </div>
  )
}

export default Navigation
