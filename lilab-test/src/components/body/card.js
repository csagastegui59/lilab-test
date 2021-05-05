import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Heart, MessageCircle } from 'react-feather';

import ModalComments from './modalComments.js';

const DATA = {
  id: "UWdcOFTc7DfzOhI6LpI4",
  image: "https://img.dummyap.io/photo-1564694202779-bc908c327862.jpg",
  likes: 43,
  link: "https://www.instagram.com/teddyosterblomphoto/",
  owner: {
    email: "emilie.lambert@example.com",
    firstName: "Emilie",
    id: "uQrnqsqyh8FjSXAPc7oA",
    lastName: "Lambert",
    picture: "https://randomuser.me/api/portraits/women/93.jpg",
    title: "mrs"
  },
  publishDate: "2020-05-24T14:53:17.598Z",
  tags:[
    "animal", 
    "dog", 
    "golden retriever"
  ],
  text: "adult Labrador retriever"
}

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6092cabb2ee61659685ea048';

export default function Card({ post = DATA }) {

  const[modalComments, setModalComments] = useState(false)

  function handleComments(value){
    setModalComments(value)
  }
 
  return (
    <div className="bg-white shadow-md w-11/12 md:w-1/2 lg:w-2/6 rounded my-5">
      <ModalComments isOpen={true}/>
      <div className="m-2 flex">
        <div className="flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-500">
          { post.owner.picture ? 
            <img className="object-cover w-full h-full" src={post.owner.picture} alt={`Foto de ${post.owner.firstName}`}  />
          :
            <h1 className="text-xl font-bold text-white uppercase">
              {post.owner.firstName[0]}
            </h1>
          }
        </div>
        <div className="mx-4 text-sm">
          <p className="inline-block font-bold">{post.owner.firstName}&nbsp;{post.owner.firstName}</p>
          <br/>
          <p className="inline-block opacity-75">{post.owner.email}</p>
        </div>
      </div>
      <div className="block overflow-hidden h-60">
        <img
          className="object-cover w-full h-full"
          src={post.image}
          alt="post"
        />
      </div>
      <div className="m-2 flex">
        <Heart size={20} className="mr-1" />
        <MessageCircle onClick={() => handleComments(true)} size={20} className="mr-1 cursor" />
      </div>
      <div className="m-2">
        <span className="inline-block font-bold text-xs">{`${post.likes} Me gusta`}</span>
      </div>
      <p className="font-light px-2">
       {post.text}
      </p>
      <div className="m-2 flex">
        {post.tags.map((tag,i) => (
          <span key={`tag#${i}`} className="inline-block text-sm bg-green-100 rounded px-1 m-1">{`#${tag}`}</span>
        ))}
      </div>
      <ModalComments modalComments={modalComments} handleComments={handleComments} />
    </div>
  );
}
