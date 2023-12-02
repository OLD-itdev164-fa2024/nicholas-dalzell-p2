import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { H1 } from '../components/Heading'

const VideogameReview = ({ data }) => {
    const { title, description, rating } = data.contentfulVideogameReview;

    return (
        <Layout>
            <H1>{title}</H1>
            <div>{description}</div>
            <div>Rating: {rating}</div>
            <div dangerouslySetInnerHTML={{__html: data.contentfulVideogameReview.
                markdownContent.childMarkdownRemark.html}}/>      
        </Layout>
    );
}

export default VideogameReview;

export const pageQuery = graphql`
query videogameReviewQuery($slug: String!) {
    contentfulVideogameReview(slug: {eq: $slug}) {
      id
      title
      slug
      description
      rating
      markdownContent {
        childMarkdownRemark {
            html
        }
      }
    }
    
  }
    
`