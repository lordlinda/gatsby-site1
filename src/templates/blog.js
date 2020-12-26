import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/Head"
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      console.log(node)
    },
  },
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`
function Blog(props) {
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>{renderRichText(props.data.contentfulBlogPost.body, options)}</div>
    </Layout>
  )
}

export default Blog
