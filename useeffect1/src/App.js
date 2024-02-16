
import React, { useState } from 'react';
import UserPosts from './problem';

function App() {
  const [userId, setUserId]  = useState(1)
  return (
    <div>
      <button  onClick={() => {setUserId(userId + 1)}}>
          Increase User Id
      </button>
      <h1>User {userId} Posts</h1>
      <UserPosts userId={userId} />
    </div>
  );
}

export default App;
