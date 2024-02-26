import classes from './EventItem.module.css';
import {useRouteLoaderData, json, Link} from 'react-router-dom'

function EventItem() {
  function startDeleteHandler() {
    // ...
  }
  const data = useRouteLoaderData('event-details');
  
  const event = data.event;



  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={'../edit/'+event.id} >Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

export const loader = async ({request, params})=>{
  const eventId  = params.eventID;
  const respons = await fetch(`http://localhost:8080/events/${eventId}`);

  if(!respons.ok){
    throw json({
      message:'Akash'
    },{
      status:500
    })
  }

  return respons;
}
