"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/logo.png';
import searchicon from '@/app/assets/search_icon.svg';
import bellicon from '@/app/assets/bell_icon.svg';
import profileicon from '@/app/assets/profile_img.png';
import careticon from '@/app/assets/caret_icon.svg';
import { logout } from '../firebase';
import Link from 'next/link';

const Navbar = () => {

    const navRef:any=useRef();

    useEffect(()=>{

        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')

            }
        })

    })
    
    return (
        <div ref={navRef} className='flex justify-between w-full fixed px-[6%] py-5 text-sm text-gray-300 bg-gradient-to-b from-black/70 to-transparent z-[1]'>
            <div className='flex items-center justify-center gap-12'>
                <Image src={logo} alt="Logo" width={150} height={150} />
                <ul className='lg:flex gap-[20px] list-none cursor-pointer hidden '>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className='flex gap-[20px] items-center justify-center'>
                <Image src={searchicon} alt="icon" width={20} height={20} />
                <p>Children</p>
                <Image src={bellicon} alt="icon" width={20} height={20} />

                {/* Navbar profile */}
                <div className='relative group flex items-center gap-[10px] cursor-pointer'>
                    <Image src={profileicon} alt="Profile Icon" width={40} height={40} className='rounded-sm' />
                    <Image src={careticon} alt="Caret Icon" width={10} height={10} className='cursor-pointer' />

                    {/* Dropdown */}
                    <div className="absolute top-full right-0 bg-[#191919] px-5 py-4 rounded-sm underline hidden group-hover:block w-48">
                        <Link href={"/login"}>                        <p className="text-sm cursor-pointer" onClick={()=>{logout()}}>Sign out of Netflix</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
