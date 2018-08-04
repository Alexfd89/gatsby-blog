import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const post = data.markdownRemark
    console.log(post);
  return (
    <div>
      <Link to="/news">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted on {post.frontmatter.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query NewsPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        date
      }
    }
  }
`

