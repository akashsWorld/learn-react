import React from 'react'
import Navigation from '../components/Navigation'
import {Outlet} from 'react-router-dom'
const RootPage = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default RootPage;
