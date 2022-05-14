import React from 'react';
import Layout from '../assets/components/Layout';
import Hero from '../assets/components/Hero'
// import Marquee from '../assets/components/Marquee';
import CleaningService from '../assets/components/CleaningService';
import Services from '../assets/components/Services';
import Message from '../assets/components/Message';
import Blog from '../assets/components/Blog';
import BlogPost from '../assets/components/blog/AllBlogPost'

export default function Home() {
  return (
    <Layout>
      <main className=''>
         <Hero />
         {/* <Marquee /> */}
         <CleaningService />
         <Services />
         <Message />
         <Blog />
         <BlogPost />
      </main>
    </Layout>
  )
}
