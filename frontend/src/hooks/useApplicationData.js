import { toHaveStyle } from '@testing-library/jest-dom/matchers';
import { useReducer, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';


export const ACTIONS = {
  SET_EVENTS_DATA: 'SET_EVENTS_DATA',
  SET_LOGGED_IN: 'SET_LOGGED_IN',
  SET_LOCATION: 'SET_LOCATION'
};

const useApplicationData = () => {

  const initialState = {
    eventsData: [],
    loggedIn: {},
    location: '/'
  };



  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (state.loggedIn.id) {
      fetch(`http://localhost:8001/api/events/${state.loggedIn.id}?location=${state.location}`, {
      })
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_EVENTS_DATA, payload: data });
        });
    }
  }, [state.loggedIn, state.location, state.eventsData]);



  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_EVENTS_DATA:
        return { ...state, eventsData: action.payload };
      case ACTIONS.SET_LOGGED_IN:
        return { ...state, loggedIn: action.payload };
      case ACTIONS.SET_LOCATION:
        return { ...state, location: action.payload };

      default:
        return state;
    }
  }

  function addUserToEvent(userId, eventId) {
    fetch(`/api/eventuser/${userId}/${eventId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }

    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
        } else {
          throw new Error(data.message);
        }
      })
      .catch(error => {
        console.error('Error adding user to event:', error);
        alert('Failed to add user to event. Please try again.');
      });
  }


  function setLocation(location) {
    dispatch({ type: ACTIONS.SET_LOCATION, payload: location });
  }

  function deleteEvent(eventId) {
    fetch(`/api/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
       .then(response => {
        // Check if response is OK (status 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Return response text
        return response.json();
    })
    .then(data => {
        // Log the response message
        console.log(data);
        // Display message to the user
        alert(data.message);
    })
    .catch(error => {
        console.error('Error deleting event:', error);
        alert('Failed to delete event. Please try again.');
    });
  }

  function deleteEventFromUser(userId, eventId) {
    fetch(`/api/eventuser/${userId}/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(data.message);
        } else {
          throw new Error(data.message);
        }
      })
      .catch(error => {
        console.error('Error withdrawing from event:', error);

        alert('Failed to withdraw from event. Please try again.');

      });
  }

  const setLoggedIn = function (email, password, onLoginSuccess) {
    fetch("http://localhost:8001/api/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("User data from server:", data);

        if (data.id) {
          dispatch({ type: ACTIONS.SET_LOGGED_IN, payload: data });
          onLoginSuccess(data); // Call the callback here

        } else {
          dispatch({ type: ACTIONS.SET_LOGGED_IN, payload: {} });
          console.error('Invalid email or password');
        }
      })
      .catch(error => {
        console.error('Error fetching user:', error);
      });
  };

  const fetchUserData = () => {
    const userId = Cookies.get('user_id');

    if (userId) {
      fetch(`http://localhost:8001/api/users/${userId}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          console.log("Fetched user data:", data);
          dispatch({ type: ACTIONS.SET_LOGGED_IN, payload: data });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  };


  return {
    state,
    setLoggedIn,
    addUserToEvent,
    deleteEventFromUser,
    setLocation,
    deleteEvent
  };
};

export default useApplicationData;




