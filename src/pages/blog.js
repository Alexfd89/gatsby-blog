import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1 className='mb-5'>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div className='mt-5' key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <hr />
            <Link to={`/${post.node.frontmatter.templateKey}${post.node.fields.slug}`}>Read more</Link>
        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`
export default BlogPage

