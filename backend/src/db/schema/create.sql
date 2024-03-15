DROP TABLE IF EXISTS EVENTUSER CASCADE;
DROP TABLE IF EXISTS USERS CASCADE;
DROP TABLE IF EXISTS EVENTS CASCADE;


CREATE TABLE USERS (
  ID SERIAL PRIMARY KEY,
  FIRSTNAME VARCHAR(255) NOT NULL,
  LASTNAME VARCHAR(255) NOT NULL,
  EMAIL VARCHAR(255) NOT NULL,
  USER_PASSWORD VARCHAR(255) NOT NULL,
  CITY VARCHAR(255) NOT NULL,
  VOLUNTEER_HOURS INTEGER NOT NULL
);

CREATE TABLE EVENTS (
  ID SERIAL PRIMARY KEY,
  EVENT_NAME VARCHAR(255) NOT NULL,
  EVENT_DETAILS VARCHAR(255) NOT NULL,
  START_TIME TIME NOT NULL,
  END_TIME TIME NOT NULL,
  EVENT_HOURS INTEGER NOT NULL,
  EVENT_STATUS VARCHAR(255),
  EVENT_ADDRESS VARCHAR(255) NOT NULL,
  CITY VARCHAR(255) NOT NULL,
  EVENT_DATE DATE NOT NULL,
  CREATOR_ID INTEGER REFERENCES USERS(ID)
);

CREATE TABLE EVENTUSER(
  user_id INTEGER REFERENCES users(ID),
  event_id INTEGER REFERENCES events(ID),
  PRIMARY KEY (user_id, event_id)
);