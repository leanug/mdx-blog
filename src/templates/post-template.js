import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'
import Seo from "../components/SEO"
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const PostTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: {
        date,
        humanDate,
        image,
        title
      },
      body,
    }, 
  } = data

  const img = getImage( image )

  return (
    <>
      <Seo 
        title={ title }
      />
      <Wrapper>
        <header>
          <h1>{ title }</h1>
          <div className="header-info">
            <StaticImage
              alt="author"
              height={ 30 }
              src="../images/author/author.jpg"
              width={ 30 }
              className="author-img"
            />
            <span style={{ marginLeft: '1rem' }}>Written by Leandro</span>
            <div className="circle"></div>
            <span>Updated: <time dateTime={ date }>{ humanDate }</time></span>
          </div>
        </header>
        <GatsbyImage
            alt={ title }
            imgClassName="img" 
            image={ img }
            loading="lazy"
        />
        <MDXRenderer>{ body }</MDXRenderer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  max-width: var(--content-width);
  margin: auto;
  width: 100%;

  .header-info {
    align-items: center;
    color: var(--clr-beta);
    display: flex;
    font-size: var(--font-small);
    margin-bottom: 1.2rem;
  }

  h1 {
    margin-bottom: 1.2rem;
  }

  .time-to-read {
    color: var(--clr-beta);
    font-size: var(--font-small);
  }

  img {
    border-radius: var(--radius-alpha);
  }

  .author-img {
    border-radius: 50%;
  }

  .circle {
    background-color: var(--clr-alpha);
    border-radius: 50%;
    display: inline-block;
    height: .8rem;
    margin: .4rem .8rem .4rem .8rem;
    width: .8rem;
  }  

  & > *:not(:last-child) {
    margin-bottom: 2.5rem;
    width: 100%;
  }

  a {
    color: var(--clr-psi);
    text-decoration: underline;

    &:hover {
      color: var(--clr-alpha);
      text-decoration: none;
    }
  }

  ol, ul {
    margin-left: 2rem;
  }

  blockquote {
    border-left: .6rem solid var(--clr-alpha);
    padding: 0 2rem;
  }

  .author {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }

  pre {
    overflow-x: auto;
  }
`

export const query = graphql`
  query GetSinglePost ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date
        humanDate: date(formatString: "YYYY MMMM Do")
        image {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    width: 950
                )
            }
        }
        title
      }
      body
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate
