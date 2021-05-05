import React, { useEffect, useState } from 'react';
import Card from './card'
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '6092cabb2ee61659685ea048';

export default function Index() {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    // setLoading(true);
    axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
      .then(({ data }) => setData(data.data))
  }, []);
  console.log(data)
  return (
    <div className="container mx-auto flex flex-col items-center">
      {data.map((post) => {
        return (<Card post={post} />)
      })}
    </div>
  );
}


