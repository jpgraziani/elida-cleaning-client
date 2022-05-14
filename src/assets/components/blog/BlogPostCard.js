import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';
// import TagListCard from './TagList_Card'

const BlogPostCard = ({ blogPost = [] }) => {
  return (
    <section className='sm:p-8 sm:flex'>
      {blogPost.map(article => {
        const { 
          id, 
          title,
          slug,
          image,
          author,
        } = article;
        
        const pathToImage = getImage(image)

        const slugPath = slugify(slug, {lower:true})
       
        return (
            <article key={id} className='m-4 bg-white flex flex-col'>
              <Link to={`/articles/${slugPath}`}>
                <GatsbyImage 
                image={pathToImage}
                className='article-img'
                alt={title}
                />
               </Link> 
               
                <div className='p-4'>
                  <div className='my-3 border-b border-1 border-black' />
                  <p className='text-2xl'>{title}</p>
              
                  <div className='my-3 border-b border-1 border-black' />
                
                  
                </div>
                <Link to={`/articles/${slugPath}`} className='py-4 text-center border-2 border-black rounded-full'>
                  read now
                  </Link>

                  {/* <TagListCard articleTags={articleTags} /> */}
            </article>
        )
      })}
    </section>
  )
}

export default BlogPostCard
