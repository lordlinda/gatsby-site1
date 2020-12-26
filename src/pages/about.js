import { Link } from "gatsby"
import React from "react"
import Footer from "../components/footer"
import Head from "../components/Head"
import Layout from "../components/layout"

function about() {
  return (
    <Layout>
      <Head title="about" />
      <h1>About page</h1>
      <p>This is the blog content</p>
      <Link to="/contact">contact me</Link>
      <Footer />
    </Layout>
  )
}

export default about
