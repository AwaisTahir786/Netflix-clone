import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import hero_img from "@/app/assets/hero_banner.jpg"
import hero_title from "@/app/assets/hero_title.png"
import info_icon from "@/app/assets/info_icon.png"
import play_icon from "@/app/assets/play_icon.png"
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>

      <div className="relative">
        <Image src={hero_img} alt="" className="mask-gradient w-[100%]"  />
        <div className='lg:absolute px-[6%] py-5 w-[100%] bottom-0'>
        <Image src={hero_title} alt="" className="w-[90%] max-w-md mb-[30px]" />
        <p className='max-w-[700px] text-sm mb-[20px]'>Discovering his ties to a secret ancient order, a young man living in mordern Istanbul embarks on a quest to save the city from an immortal enemy.</p>

        <div className='flex mb-[50px] gap-2'>
        <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#ffffffbf] border border-gray-300 rounded-lg bg-white text-black text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
        <Image src={play_icon} alt="icon" width={20} className='w-[25px] '/>
            Play</button>
            <button className='flex items-center gap-2 px-4 py-2 hover:bg-[#515151b3]   rounded-lg bg-[#6d6d6eb3] text-[#fff] text-sm font-bold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '>
            <Image src={info_icon} alt="icon" width={20} />More Info</button>


        </div>


        <TitleCards/>

        </div>

      </div>

      <div className='px-[6%]'>
        <TitleCards title='Blockbuster Movies' category='top_rated'/>
        <TitleCards title='Only on Netflix' category='popular'/>
        <TitleCards title='Upcoming' category='upcoming'/>
        <TitleCards title='Top Pics for You' category='now_playing'/>


      </div>

      <Footer/>
    </div>
  )
}

export default Homepage;
