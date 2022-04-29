import React, {Fragment} from 'react';
import { Link } from 'gatsby';
import {FocusTrap} from '@headlessui/react';
import OpenIcon from './Openicon';

/**
 * A client component that defines the navigation for a mobile storefront
 */
export default function MobileNavigation({isOpen, setIsOpen}) {
  const OpenTrap = isOpen ? FocusTrap : Fragment;

  return (
    <nav className='flex'>
      <div className="lg:hidden">
        <OpenTrap>
          <button
            type="button"
            className="flex justify-center items-center w-7 h-full"
            onClick={() => setIsOpen((previousIsOpen) => !previousIsOpen)}
          >
            {isOpen ? <CloseIcon /> : <OpenIcon />}
          </button>
          {isOpen ? (
            <div className="absolute -left-0 top-20 w-full h-screen z-10 bg-primary px-4 md:px-12 py-7">
              <ul className='mobile-nav-menu-content flex flex-col content-center mt-8 text-white'>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/about'>Blog</Link></li>
                <li><Link to='/about'>Contact</Link></li>
              </ul>
            </div>
          ) : null}
        </OpenTrap>
      </div>
    </nav>
    
  );
}

function CloseIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 17L17 1M1 1L17 17"
        stroke="yellow"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}