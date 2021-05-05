import React, { useEffect, useState } from 'react';
import Card from './card'
import getPost from '../fetch/getPost.js'


export default function Index() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost().then(data => setPost(data))
  }, []);
  console.log(post)
  return (
    <div className="container mx-auto flex flex-col items-center">
      {post.map((post) => {
        return (<Card post={post} />)
      })}
      <Card />
    </div>
  );
}


