import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-5">Login With</h2>
      <div className='flex flex-col gap-3'>
        <button className="btn btn-primary btn-outline text-blue-500 border-blue-500 hover:text-white flex justify-center items-center">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-primary btn-outline text-blue-500 border-blue-500 hover:text-white flex justify-center items-center">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
}

export default RightSideBar
