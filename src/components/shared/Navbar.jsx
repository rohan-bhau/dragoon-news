'use client'
import Link from 'next/link'
import avatar from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-clinet';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user
  // console.log(user)

  return (
    <div className="flex justify-between container mx-auto mt-5 mb-5">
      <div></div>
      <ul className="flex gap-4 text-[#706f6f] font-semibold">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-between items-center gap-3">
        {user ? (
          <div className='flex items-center gap-3'>
            <p className='text-lg font-semibold '>Hello! {user.name}</p>
            <Image
              src={user?.image ? user.image : avatar}
              alt="user Avatar"
              width={40}
              height={40}
              className='rounded-full'
            />
            <button onClick={async()=>await authClient.signOut()} className="btn btn-error  text-[#FFFFFF]">Logout</button>
          </div>
        ) : (
          <Link href="/login">
            <button className="btn bg-[#403F3F] text-[#FFFFFF]">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar
