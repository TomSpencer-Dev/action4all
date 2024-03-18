import React from 'react';
import Event from './Event';


function Events(props) {
  
  const eventItems = props.events.map((event) => {
    return <Event key={event.id} data={event} addUserToEvent = {props.addUserToEvent} deleteEventFromUser = {props.deleteEventFromUser} loggedIn = {props.loggedIn}/>;
  });
    return (
<>

      <ul role="list" className="divide-y divide-gray-100">
        {eventItems}
      </ul>
</>
    );
  

}

export default Events;



