"use client";

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from "@/app/firebase";

const FormLogout = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
       router.push("/")
      } else {
        console.log("Logged Out");
        router.push("/login")
      }
    });

    return () => unsubscribe();
  }, [router]);

  return null; // This component doesn't render anything visible
};

export default FormLogout;
