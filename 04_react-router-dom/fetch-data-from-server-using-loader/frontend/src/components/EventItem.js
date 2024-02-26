import classes from './EventItem.module.css';
import {useLoaderData} from 'react-router-dom'

function EventItem() {
  function startDeleteHandler() {
    // ...
  }
  const data = useLoaderData();
  const event = data.event;

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

export const loader = async ({request, params})=>{
  const eventId  = params.eventID;
  return fetch(`http://localhost:8080/events/${eventId}`);
}
