"use client"

import React, { useRef ,useEffect, useState} from 'react';
import cards_data from '../assets/cards/Cards_data';
import Image from 'next/image';
import Link from 'next/link';

interface Titilecardstypes{
  title?:string,
  category?:string
}

const TitleCards = ({title,category}:Titilecardstypes) => {

  // use for mouse scrolling 

  const cardsRef= useRef<any>();
  const [apiData, setApiData]=useState([]);

  console.log(apiData)




  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg0MDE5ZGZjZTJiZmNlYTBhMGRlYjRhODc4N2FlNSIsInN1YiI6IjY2NzM1MDc3ZDg4Y2NhNjI2NzZlYWRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NB_IyoZxeiDIwIwJoCHpv5THZ3kKTaDOBGC2ACi3hjQ'
    }
  };
  
 

  function handleclick(event:any) {
    if(cardsRef.current){
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;

    }
    
  }



  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleclick)
   
  }, [])
  

  return (
    <div className='mt-[50px] mb-[20px]'>
      <h2 className='mb-[8px] font-bold text-xl'>{title?title : "Popular on Netflix"}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-hidden" ref={cardsRef}>
        {apiData.map((card:any, index) => (
          <Link href={`/player/${card.id}`} key={index} className='relative'>
            <div className='w-[240px]'>
              <Image
                src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path}
                alt='img'
                width={240}
                height={120} // Adjust the height according to your aspect ratio
                className='rounded-md cursor-pointer'
              />
              <p className='absolute bottom-[20px] text-white'>{card.original_title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
