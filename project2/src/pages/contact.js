import React from "react"
import { graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo tite="Home" />
            <h1>Contact</h1>
            <p>{`Please send all inquiries regarding ${company} to:`} </p>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>

            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`