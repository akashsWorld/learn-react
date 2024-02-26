import React, { Fragment } from 'react'
import EventsNavigation from '../components/EventsNavigation'
import {Outlet} from 'react-router-dom'


const EventsPage = () => {
  return (
    <Fragment>
    <EventsNavigation/>
    <Outlet/>
    </Fragment>
  )
}

export default EventsPage
