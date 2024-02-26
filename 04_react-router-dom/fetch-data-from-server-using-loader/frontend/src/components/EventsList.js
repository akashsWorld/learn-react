import classes from './EventsList.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function EventsList() {

  const [events,setEvents] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  const fetchData = async ()=>{

    setIsLoading(true);

    const response = await fetch('http://localhost:8080/events/')
    if(!response.ok){
      throw new Error();
    }
    const data  = await response.json();

    setEvents(data.events);
    setIsLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
