import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-white'>
      {/* Mobile Navigation */}
      <nav className={`bg-white p-4 fixed w-full top-0 z-10 shadow-md md:hidden transition-colors duration-300 ${scrolled ? 'bg-white' : ''}`}>
        <div className='flex items-center justify-between'>
          <Image src={'/icons8-home-32.png'} alt='Home icon' width={24} height={24} />
          <div className="absolute right-3">
            <Image 
              src={'/icons8-menu-48.png'} 
              width={24} 
              height={24} 
              alt='Menu' 
              onClick={toggleMenu} 
              className='cursor-pointer'
            />
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`bg-white z-50 shadow-lg text-black text-[17px] font-semibold top-0 h-screen pb-6 right-0 fixed w-[250px] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Image 
            src={'/icons8-cancel-50 (3).png'} 
            width={30} 
            height={30} 
            alt='Close menu' 
            className='absolute right-4 mt-7 cursor-pointer' 
            onClick={closeMenu} 
          />
          <div className='p-3 px-6 mt-14 flex flex-col gap-10 text-left'>  
            <Link href='/' className='hover:text-blue-600' onClick={closeMenu}>Home</Link>
            <Link href='/' className='hover:text-blue-600' onClick={closeMenu}>Rent</Link>
            <Link href='/' className='hover:text-blue-600' onClick={closeMenu}>Buy</Link>
            <Link href='/' className='hover:text-blue-600' onClick={closeMenu}>Sell</Link>
            <Link href='/' className='hover:text-blue-600' onClick={closeMenu}>Manage Property</Link>
            <div className='bg-[#f2f2f2] text-center rounded-full p-2.5 hover:bg-gray-200 cursor-pointer'>
              Login            
            </div>
            <div className='bg-black text-white text-center rounded-full p-2.5 hover:bg-gray-800 cursor-pointer'>
              Sign up          
            </div>
          </div>      
        </div>                 
      </nav>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex top-0 fixed w-full z-10 items-center justify-between p-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className='max-w-7xl w-full mx-auto flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image src={'/icons8-home-32.png'} alt='Home icon' width={28} height={28} />
            <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-black' : 'text-white'}`}>Realeast</span>
          </div>
          
          {/* Navigation Links */}
           <div className='absolute left-50 '>
        <div className="flex space-x-8 text-black  text-[17px] font-bold">
          <Link href='/' className='font-medium hover:text-blue-600 transition font-bold'>Home</Link>
          <Link href='/' className='font-medium hover:text-blue-600 transition font-bold'>Rent</Link>
          <Link href='/' className='font-medium hover:text-blue-600 transition font-bold'>Buy</Link>
          <Link href='/' className='font-medium hover:text-blue-600 transition font-bold'>Sell</Link>
          <Link href='/' className='font-medium hover:text-blue-600 transition font-bold'>Manage Property</Link>
        </div>
        </div>
          
          {/* Auth Buttons */}
          <div className="flex space-x-4">
          
         
          <button className='px-4 py-2 bg-[#f2f2f2]  text-black  rounded-full font-medium hover:bg-gray-800 transition'>
            Login
          </button>
          <button className='px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition'>
            Sign up
          </button>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;