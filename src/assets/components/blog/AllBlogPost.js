import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'


const AllBlogPost = () => {
  const data = useStaticQuery(query)
  const articles = data.allContentfulArticle.nodes
  console.log('all articles', articles)

  return (
    <section>
      <ArticleCard articles={articles} />
    </section>
  )
}

export default AllBlogPost

const query = graphql`
  {
    allContentfulArticle(filter: {featured: {eq: false}}) {
      nodes {
        title
        slug
        date
        author
        articleSnippet {
          articleSnippet
        }
        articleTags {
          tags
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          id
        }
      }
    }
  }
`