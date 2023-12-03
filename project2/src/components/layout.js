/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'
import { SlateGray } from './themes/SlateGray'

import { Header } from "./Header"
import { Main } from "./Main"
import { Footer } from "./Footer"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  background: ${({ theme }) => theme.variants.main.primary.backgroundColor};
  max-width: var(--size-content);
  padding: var(--size-gutter);
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={SlateGray}>
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <Main  m={0}>{children}</Main>
      </Content>
      <Footer/>
      </ThemeProvider>

      
    </>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout