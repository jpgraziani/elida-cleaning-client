import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AllBlogPostCard from './BlogPostCard'

const AllBlogPost = () => {
  const data = useStaticQuery(query)
  const blogPost = data.allContentfulBlogPost.nodes
  console.log('all articles', blogPost)

  return (
    <section>
      <AllBlogPostCard blogPost={blogPost} />
    </section>
  )
}

export default AllBlogPost

const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        author
        blogFull {
          blogFull
        }
        featured
        title
        slug
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
    }
  }
`

// `const query = graphql`
//   {
//     allContentfulArticle(filter: {featured: {eq: false}}) {
//       nodes {
//         title
//         slug
//         date
//         author
//         articleSnippet {
//           articleSnippet
//         }
//         articleTags {
//           tags
//         }
//         image {
//           gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
//           id
//         }
//       }
//     }
//   }
// ``