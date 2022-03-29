import React from 'react'
import { Link } from 'gatsby';
import {useState} from 'react';
import Navigation from './navigation';
import MobileNavigation from './mobileNav';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 lg:h-32" role="banner">
      <div className={`
          fixed 
          z-20 
          h-20 
          bg-white
          w-full 
          mx-auto 
          lg:h-32  
          px-6 
          md:px-8 
          md:py-6 
          lg:pt-8 
          lg:pb-0
        `}
      >
        <div className="h-full flex lg:flex-col place-content-between">
          <div className="text-center w-full flex justify-between items-center">
            <Link to='/'><h2 className='logo-text text-blue-800'>Elidas</h2></Link>
              <MobileNavigation
                isOpen={isMobileNavOpen}
                setIsOpen={setIsMobileNavOpen}
              />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
