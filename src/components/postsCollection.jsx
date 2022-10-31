import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import useJsonFetch from '../hooks/useJsonFetch';
import PostShow from './postShow';
import PostEdit from './postEdit';

function PostsCollection() {

  const [postMode, setPostMode] = useState('show');

  const url = "http://localhost:7070/posts";
  const [data, isLoading, hasError] = useJsonFetch(url);
  const { id } = useParams();

  return (
    <>
    {isLoading && <progress /> ||
      data.map((a,i) => a.id === Number(id) ? 
        postMode === 'show' ?
          <PostShow key={i} id={a.id} text={a.content} editPost={() => setPostMode('edit')} />
        : postMode === 'edit' ?
          <PostEdit key={i} id={a.id} text={a.content} editPost={() => setPostMode('show')} />
          : undefined
      : undefined)
    }
    </>
  )
}
  
export default PostsCollection;