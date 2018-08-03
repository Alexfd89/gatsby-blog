import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <button className='btn btn-primary'>BButton</button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div className='row text-center'>
      <div className='col-lg-6 col-sm-12 p-5'>A</div>
      <div className='col-lg-6 col-sm-12 p-5'>B</div>
    </div>
  </div>
)

export default IndexPage
