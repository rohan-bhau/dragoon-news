import Link from 'next/link'
import user from '@/assets/user.png';
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='flex justify-between container mx-auto mt-5 mb-5'>
      <div></div>
      <ul className='flex gap-4 text-[#706f6f] font-semibold'>
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
      <div className='flex justify-between items-center gap-3'>
        <Image src={user} alt="user Avatar" width={40} height={40} />
        <button className="btn bg-[#403F3F] text-[#FFFFFF]">Login</button>
      </div>
    </div>
  );
}

export default Navbar
