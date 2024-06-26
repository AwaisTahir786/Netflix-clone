"use client";
import React, { useEffect, useState } from 'react';
import logo from '@/app/assets/logo.png';
import Image from 'next/image';
import backgroundBanner from '@/app/assets/background_banner.jpg'; // Import the background image
import { login, signup } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/firebase';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loading_spinner from "@/app/assets/netflix_spinner.gif"



const Login = () => {


  // styling
  const loginStyle: React.CSSProperties = {
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundBanner.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px 8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  };


  // States

  const [signstate, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);


  async function user_auth(event: any) {
    event.preventDefault();
    setSpinner(true);
    if (signstate === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setSpinner(false);
  }


  // Navigation

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
       router.push("/")
       console.log("Logged In");

      } else {
        console.log("Logged Out");
        router.push("/login")
      }
    });

    return () => unsubscribe();
  }, [router]);


  return (
    // spinner?<div className='w-[100%] h-[100vh] flex items-center justify-center'><Image src={loading_spinner} alt='loader' className='w-[60px]'/></div>
    // :
    <div style={loginStyle}>
                    <ToastContainer theme='dark' />

      <div className='absolute top-0 left-0 m-4 px-[6%] py-5'>
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <div className='bg-black bg-opacity-75 md:px-14 md:py-20 px-8 py-12 rounded-lg shadow-lg w-full max-w-md mt-16 md:mt-0'>
        <h1 className='text-3xl font-bold mb-6 text-white'>{signstate}</h1>
        <form className='space-y-4'>
          {signstate === "Sign Up" ?
            <input
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              type="text"
              placeholder='Your name'
              className='w-full p-3 bg-gray-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-500'
            /> : <></>}
          <input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            type="email"
            placeholder='Email'
            className='w-full p-3 bg-gray-[#333] rounded focus:outline-none focus:ring-2 focus:ring-red-500'
          />
          <input
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            type="password"
            placeholder='Password'
            className='w-full p-3 bg-gray-[#333] rounded focus:outline-none focus:ring-2 text-black focus:ring-red-500'
          />
          <button onClick={user_auth} type='submit' className='w-full py-3 bg-red-600 rounded font-bold hover:bg-red-700 transition duration-300'>
            {signstate}
          </button>
          <div className='flex justify-between items-center text-sm text-gray-400'>
            <div className='flex items-center'>
              <input type="checkbox" className='mr-2' />
              <label>Remember Me</label>
            </div>
            <p className='hover:underline cursor-pointer'>Need help?</p>
          </div>
        </form>
        <div className='form switch'>
          {signstate === "Sign In" ?
            <p className='mt-[40px] text-[#737373]'>New to Netflix? <span onClick={() => setSignState("Sign Up") } className='ml-[6px] text-[#fff] cursor-pointer font-semibold'>Sign Up Now</span> </p>
            :
            <p className='mt-[40px]  text-[#737373]'>Already have account? <span onClick={() => setSignState("Sign In")} className='ml-[6px] text-[#fff] cursor-pointer font-semibold'>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
