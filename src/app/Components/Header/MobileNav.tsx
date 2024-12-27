import React from 'react';
import { ImCross } from 'react-icons/im';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
  showNav: boolean,  // changed from Boolean to boolean
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
  
  return (
    <div className={`fixed ${navStyle} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#000000e0] z-[1002]`}>
      <ImCross onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white' />
      
      {/* Nav Div */}
      <div className={`bg-orange-700 ${navStyle} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%] text-center`}>
        <ul className='space-y-9'>
          <li className='text-[21px] font-medium hover:text-yellow-400 text-white'>
            <Link href='./'>Home</Link>
          </li>
          <li className='text-[21px] font-medium hover:text-yellow-400 text-white'>
            <Link href='./'>Shop</Link>
          </li>
          <li className='text-[21px] font-medium hover:text-yellow-400 text-white'>
            <Link href='./'>Menu</Link>
          </li>
          <li className='text-[21px] font-medium hover:text-yellow-400 text-white'>
            <Link href='./'>Blog</Link>
          </li>
          <li className='text-[21px] font-medium hover:text-yellow-400 text-white'>
            <Link href='./'>Contact</Link>
          </li>
          
          <li>{/* Buttons */}
            <Button className="block bg-[#4D2C5E] w-40 h-14 rounded-[218px] hover:bg-[#6c3d83]">
            Sign In
          </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
