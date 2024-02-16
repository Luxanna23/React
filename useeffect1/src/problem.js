import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UserPosts = ({ userId }) => {
  
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            setList(res.data)
        })();

    }, [userId]);

  return (
    <div>
       {list.map(elem => {
        return (<div>
                <h1>{elem.title}</h1>
                <p>{elem.body}</p>
            </div>
        )
       })}
    </div>
  );
};

export default UserPosts;