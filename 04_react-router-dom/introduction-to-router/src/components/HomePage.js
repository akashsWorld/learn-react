import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
    <h1>This is Home page</h1>
      <Link to='/products' className='decoration-none'>Go to Products Page</Link>
    </div>
  )
}

export default HomePage
