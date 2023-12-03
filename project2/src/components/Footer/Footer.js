import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from 'styled-components'
import { Section } from '../Section'

const Outer =  styled.footer`
  background: ${({ theme }) => theme.variants.footer.primary.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Image = styled.img`
  margin: 0;
`

const Footer = ({ siteTitle }) => (
  <Outer>
    <Section flex>
    <Section width={2/12}
      flex flexDirection="column" justifyContent="center">
        <Link to="/">
          <ThemeConsumer>
            {theme => <Image src={theme.images.mainFooterImage} />}
          </ThemeConsumer>
        </Link>
      
    </Section>
    <Section width={10/12}
      flex flexDirection="column" justifyContent="center">
      © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          <p></p>
          Thanks for visiting!
    </Section>
    </Section>
    
  </Outer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export { Footer }