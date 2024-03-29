INSERT INTO USERS (FIRSTNAME, LASTNAME, EMAIL, USER_PASSWORD, CITY, VOLUNTEER_HOURS)
VALUES 
  ( 'John', 'Smith', 'John.Smith@user.com', '1234', 'Toronto', 34),
  ( 'Alice', 'Jones', 'Alice.Jones@user.com', '1234', 'Vancouver', 45),
  ( 'Sita', 'Dennis', 'Sita.Dennis@user.com', '1234', 'Ottawa', 56),
  ( 'Sasha', 'Berkenstock', 'Sash.Berkenstock@user.com', '1234', 'Montreal', 89),
  ( 'Crystal', 'Johnson', 'Crystal.Johnson@user.com', '1234', 'Toronto', 73),
  ('Frederick', 'Williams', 'Fred.Will@user.com', '1234', 'Vancouver', 65),
  ( 'Sarah', 'Garcia', 'Sarah.Garcica@user.com', '1234', 'Montreal', 76),
  ( 'Robert', 'Rodriguez', 'Rob.R@user.com', '1234', 'Ottawa', 22),
  ( 'Phillip', 'Martinez', 'Phillip.Martinez@user.com', '1234', 'Vancouver', 44),
  ( 'Brittany', 'Taylor', 'Brit.Tay@user.com', '1234', 'Toronto', 21);

-- Inserting into EVENTS table

INSERT INTO EVENTS (EVENT_NAME, EVENT_DETAILS, START_TIME, END_TIME, EVENT_HOURS, EVENT_STATUS, EVENT_ADDRESS, CITY, EVENT_DATE, CREATOR_ID)
VALUES 
  ('Race Setup', 'We need help setting up water stations for a marathon', '13:00:00', '17:00:00', 4, 'INCOMPLETE', '456 status Hall Road', 'Montreal', '2024-06-01', 7),
  ('Meals on Wheels', 'We need help delivering meals to at-risk clients in the community. Plus we want lots of test writing to check overflow.', '10:00:00', '17:00:00', 7, 'INCOMPLETE', '5 Union Court Street', 'Vancouver', '2024-06-15', 9),
  ('Ottawa Fair', 'We need people to run the info booth', '9:00:00', '17:00:00', 8, 'INCOMPLETE', '123 Order Drive', 'Ottawa', '2024-06-11', 8),
  ('Annual Petting Zoo', 'We need people to check tickets at the door', '14:00:00', '18:00:00', 4, 'INCOMPLETE', '476 Talus Drive', 'Vancouver', '2024-06-02', 2),
  ('Street Party Fundraiser', 'We require first aid attendants', '10:00:00', '14:00:00', 4, 'INCOMPLETE', '1 Main Street', 'Montreal', '2024-06-22', 4);


-- Inserting into EVENTUSER table
INSERT INTO EVENTUSER (user_id, event_id) VALUES
  (1, 1),  -- User with ID 1 is signed up for event with ID 1
  (2, 1),  -- User with ID 2 is signed up for event with ID 1
  (3, 2),  -- User with ID 3 is signed up for event with ID 2
  (4, 2),  -- User with ID 4 is signed up for event with ID 2
  (5, 3),  -- User with ID 5 is signed up for event with ID 3
  (1, 3),  -- User with ID 1 is signed up for event with ID 3
  (1, 4),  -- User with ID 1 is signed up for event with ID 4
  (8, 4),  
  (1, 5),  -- User with ID 1 is signed up for event with ID 5
  (10, 5); 
