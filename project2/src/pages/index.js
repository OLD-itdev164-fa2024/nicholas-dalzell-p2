import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading} from "rebass"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const IndexPage = ( {data} ) => (
  <Layout>
    <Seo title="Home"/>
    <Grid>
    {
        data.allContentfulVideogameReview.edges.map(edge => (
          <Card width={240} p={3} key={edge.node.id}>
            
            <Link to={edge.node.slug}>
              <div>
                <GatsbyImage image={edge.node.heroImage.gatsbyImageData}/>
              </div>
              
              <Heading>{edge.node.title}</Heading>
            </Link>
            
            
            <div><Heading>{edge.node.slogan}</Heading></div>
          </Card>
          
        ))
      }
    </Grid>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulVideogameReview {
    edges {
      node {
        slug
        id
        title
        heroImage {
          gatsbyImageData (
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 300
          )
        }
        slogan
      }
    }
  }
}
`