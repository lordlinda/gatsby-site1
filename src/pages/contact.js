import React from "react"
import Head from "../components/Head"
import Layout from "../components/layout"

function contact() {
  return (
    <Layout>
      <Head title="contact" />
      <h1>Contact Page</h1>
      <h2>About me</h2>
      <a
        href="https://twitter.com/AntonKreil/status/1340918290965614592"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        antron kreil
      </a>
    </Layout>
  )
}

export default contact
