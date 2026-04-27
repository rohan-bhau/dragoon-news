import Link from 'next/link'
import user from '@/assets/user.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex justify-between container mx-auto mt-5 mb-5'>
      <div></div>
      <ul className='flex gap-4 text-[#706f6f] font-semibold'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
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
