"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import back_arrow from "@/app/assets/back_arrow_icon.png";
import Link from 'next/link';

const Player = ({ params }: { params: { id: string } }) => {
  const [apiData, setApiData] = useState({
    name: "",
    published_at: "",
    key: "",
    type: ""
  });



  // Api fetch

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg0MDE5ZGZjZTJiZmNlYTBhMGRlYjRhODc4N2FlNSIsInN1YiI6IjY2NzM1MDc3ZDg4Y2NhNjI2NzZlYWRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NB_IyoZxeiDIwIwJoCHpv5THZ3kKTaDOBGC2ACi3hjQ'
        }
      };

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`, options);
        const responseData = await response.json();
        setApiData(responseData.results[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.id]);





  return (
    <div className='flex flex-col justify-center items-center'>
      <Link href={"/"}>      <Image src={back_arrow} alt='icon' className='absolute top-[20px] left-[20px] w-[50px] cursor-pointer' />
      </Link>
      {apiData.key && (
        <iframe className='rounded-md' width="90%" height="700px" src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder={0} allowFullScreen></iframe>
      )}
      <div className='flex items-center justify-between w-[90%]'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
