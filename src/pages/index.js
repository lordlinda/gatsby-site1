import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/Head"
function IndexPage() {
  return (
    <Layout>
      <Head title="home" />
      <h1>Hello</h1>
      <h2>I am Linda,a child of God loved by Jesus</h2>
      <p>
        Need a steward ?<Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
