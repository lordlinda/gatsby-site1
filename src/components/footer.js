import React from "react"
import { useStaticQuery, graphql } from "gatsby"
function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <p>Created by {site.siteMetadata.author} copyright 2019</p>
    </div>
  )
}

export default Footer
