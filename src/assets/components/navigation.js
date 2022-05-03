import React from 'react'
import { Link } from 'gatsby';
export default function Navigation() {
  return (
    <nav id='navbar' className="hidden text-center lg:flex lg:justify-center">
      <ul className="md:flex items-center justify-between">
        <li className='mx-4'><Link to='/about'>About</Link></li>
        <li className='mx-4'>Blog</li>
        <li className='mx-4'>Contact</li>
      </ul>
    </nav>
  );
}