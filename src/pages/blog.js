import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({data}) => (
  <div>
    <h1 className='mb-5'>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div className='mt-5' key={post.node.id}>
            {
                (post.node.frontmatter.image !== null) ? (
                    <img className='blog-img' src={post.node.frontmatter.image} alt='' />
                ) : (
                    <span>No Image</span>
                )
            }
            <h3>{post.node.frontmatter.title}</h3>
            <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br />
            <hr />
            <Link to={`/${post.node.frontmatter.templateKey}/${post.node.frontmatter.title}`}>Read more</Link>
        </div>
    ))}
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "blog" } }}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        templateKey
                        title
                        date
                        author
                        image
                    }
                }
            }
        }
    }
`
export default BlogPage

