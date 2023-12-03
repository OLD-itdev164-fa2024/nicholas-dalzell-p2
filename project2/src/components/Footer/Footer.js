import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from 'styled-components'
import { Flex } from 'rebass'
import { H1 } from '../Heading'
import { SearchButton } from '../Button'
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



const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    color: lightgray;
  }
`

const Image = styled.img`
  margin: 0;
`

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`

const Footer = ({ siteTitle }) => (
  <Outer>
    <Section flex>
    <Section width={2/12}
      flex flexDirection="column" justifyContent="center">
      <ThemeConsumer>
        {theme => <Image src={theme.images.mainFooterImage} />}
      </ThemeConsumer>
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