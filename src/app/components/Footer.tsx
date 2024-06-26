import React from 'react'
import Image from 'next/image'
import facebook from "@/app/assets/facebook_icon.png"
import instagram from "@/app/assets/instagram_icon.png"
import twitter from "@/app/assets/twitter_icon.png"
import youtube from "@/app/assets/youtube_icon.png"

const Footer = () => {
  return (
    <div className='py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto'>
      <div className='flex gap-8 my-[40px] mx-0'>
        <Image src={facebook} alt='' className='w-[30px] cursor-pointer'/>
        <Image src={instagram} alt='' className='w-[30px] cursor-pointer'/>
        <Image src={twitter} alt='' className='w-[30px] cursor-pointer'/>
        <Image src={youtube} alt='' className='w-[30px] cursor-pointer'/>


      </div>
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-[30px]'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Leagal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>COntact Us</li>

        
      </ul>

        <p className='text-sm text-gray-500'>@ 1997-2023 Netflix, Inc.</p>      
    </div>
  )
}

export default Footer
