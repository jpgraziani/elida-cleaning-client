// import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import AllBlogPostCard from './BlogPostCard'

// const AllBlogPost = () => {
//   const data = useStaticQuery(query)
//   const blogPost = data.allContentfulBlogPost.nodes
//   console.log('all articles', blogPost)

//   return (
//     <section className='bg-dots-pattern dots-pattern bg-repeat bg-tan bg-50% sm:bg-40% md:bg-30% lg:bg-20%'>
//       <h2 className='h2-title'>Check out our blog, Rinse and Repeat</h2>
//       <AllBlogPostCard blogPost={blogPost} />
//     </section>
//   )
// }

// export default AllBlogPost

// const query = graphql`
//   {
//     allContentfulBlogPost {
//       nodes {
//         author
//         blogFull {
//           blogFull
//         }
//         featured
//         title
//         slug
//         image {
//           gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//         }
//       }
//     }
//   }
// `