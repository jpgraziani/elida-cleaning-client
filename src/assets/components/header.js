import React from 'react'
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'
import {useState} from 'react';
import Navigation from './navigation';
import MobileNavigation from './mobileNav';
import './header.css'

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="h-20 bg-mediumTan lg:h-24 lg:bg-mediumTan" role="banner">
      <div className={`
          z-20 
          h-20 
          w-full 
          mx-auto 
          px-6
          lg:pb-0
        `}
      >
        <div className="h-full flex justify-center items-center">
          <div className="text-center w-full justify-between flex items-center">
            <Link to='/'>
                <StaticImage 
                src='../images/elidas_logo.svg'
                alt=''
                placeholder='blurred'
                layout='fullWidth'
                className='logo'
              />
              </Link>
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

/*
place-content-between
*/