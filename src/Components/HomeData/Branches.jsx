import { Box } from '@mui/system';
import React, { useState } from 'react';

import './Serch.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const BOOKS = [
  { id: 1, name: 'Engineering Electromagnetics Solution Manual Sixth Edition', dept:'EE', age: 32 },
  { id: 2, name: 'Electric Machines And Drives A First Course',dept:'EE', age: 30 },
  { id: 3, name: 'Electric Power Generation The Changing Dimensions',dept:'EE', age: 40 },
  { id: 4, name: 'Engineering Mechanics Dynamics Seventh Edition',dept:'MECH', age: 50 },
  { id: 5, name: 'Welding Metallurgy Second Edition', dept:'MECH' , age: 30 },
  { id: 6, name: 'Vibrations Second Edition',dept:'MECH' , age: 68 },
  { id: 7, name: 'Soft Computing Techniques and Its Applications in Electrical Engineering',dept:'CS', age: 34 },
  { id: 8, name: 'Clever Algorithms Nature-Inspired Programming Recipes',dept:'CS', age: 28 },
  { id: 9, name: 'Computer Organization',dept:'CS', age: 23 },
];

function Branches() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(BOOKS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = BOOKS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(BOOKS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
         <Box>
      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-dept">{user.dept}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
      </Box>
    </div>
  );
}

export default Branches;
