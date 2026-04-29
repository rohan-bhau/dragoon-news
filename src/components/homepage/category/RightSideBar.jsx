'use client'
import { authClient } from '@/lib/auth-clinet';
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
  const handleGoogleLogIn = async () => {
    console.log("btn clicked")
      const data = await authClient.signIn.social({
        provider: "google",

      });
      // console.log(data)
  }
  const handleGithubLogIn = async () => {
    // console.log("btn clicked")
      const data = await authClient.signIn.social({
        provider: "github",

      });
      // console.log(data)
  }
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Login With</h2>
      <div className="flex flex-col gap-3">
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-primary btn-outline text-blue-500 border-blue-500 hover:text-white flex justify-center items-center"
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          onClick={handleGithubLogIn}
          className="btn btn-primary btn-outline text-blue-500 border-blue-500 hover:text-white flex justify-center items-center"
        >
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
}

export default RightSideBar
