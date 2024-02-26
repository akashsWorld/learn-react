import { useNavigate, useRouteLoaderData ,json, Form ,redirect } from 'react-router-dom';

import classes from './EventForm.module.css';

function EventForm() {
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }


  const data = useRouteLoaderData('event-details');

  // In the Form tag we also can use action attribute where we specify the other route path,
  // So then this Form is use action function of other route defination which url is specfied.
  return (
    
    <Form method='post' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required value={data && data.event.title} />
      </p>
      <p>
        
        <label htmlFor="image">Image</label>
        {/* While using Form tag from react-router-dom always use name attribute in input elements. */}
        <input id="image" type="url" name="image" required value={data && data.event.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required value={data && data.event.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required value={data && data.event.description}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;


export const action = async ({request,params})=>{


  const data = await request.formData();

  const obj = {
    title:data.get('title'),
    description:data.get('description'),
    image:data.get('image'),
    date:data.get('date')
  }

  console.log(obj)

  const response = await fetch('http://localhost:8080/events',{
    headers:{
      'Content-Type':'application/json'
    },
    method:'POST',
    body:JSON.stringify(obj)
  })

  if(!response.ok){
    // In json function the first argument is the error bosy and the second argument is the body.
    throw json({
      message:'Data not Submitted',
    },{
      status:500
    })
  }

  return redirect('/events');
  
}
