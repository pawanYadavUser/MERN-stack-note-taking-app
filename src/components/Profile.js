// import React ,{useState,useEffect} from 'react'
// import {useHistory} from 'react-router-dom'

// export default function Profile() {


  
    // Your component code goes here...
  
//    return (
  //    <div>
    //    <p>Token: {token}
      //  </p>
      //</div>
    //);
//}

import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      fetch('http://localhost:5000/api/auth/getuser', {
        method: 'POST',
        headers: { authtoken: `${accessToken}` }
      })
        .then(response => response.json())
        .then(data => setUser(data))
        .catch(error => console.error(error));
    }
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Details</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
