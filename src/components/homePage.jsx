import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Post from './post';

function HomePage() {

  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:7070/posts")
      .then(response => response.json())
      .then(json => setList(json));
    }, 100)
  }, []);

  return (
    <>
      <div className="box_create-post">
        <Link className="link_create-post" to="/posts/new" >Создать пост</Link>
      </div>
      <div className="box-posts">
        {list.map((a,i) => <Post key={i} id={a.id} text={a.content} data={list} />)}
      </div>
    </>
  )
}

export default HomePage;