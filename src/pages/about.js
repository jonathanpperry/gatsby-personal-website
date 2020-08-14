import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Me">
    <SEO title="About" />
    <p>
      Jonathan Perry is a software engineer and teacher residing in Tokyo,
      Japan. I am currently pursuing an opportunity in the software engineering
      field, so do not hesitate to contact me via LinkedIn should you have an opening.
    </p>
  </Layout>
)

export default AboutPage
