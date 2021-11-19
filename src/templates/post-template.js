import React from 'react'
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
        title
      },
      body,
      tableOfContents,
      timeToRead
    }, 
  } = data

  return (
    <>
      <Seo 
        title={ title }
      />
      <Wrapper>
        <header>
          <div className="header-info">
            <StaticImage
              alt="author"
              height={ 30 }
              src="../images/authors/leandro.jpg"
              width={ 30 }
              className="author-img"
            />
            <span style={{ marginLeft: '1rem' }}>by Leandro</span>
            <div className="circle"></div>
            <span>Updated: <time dateTime="2021-04-05">{ date }</time></span>
          </div>
        </header>
        <nav>
          <ul>
            {tableOfContents.items.map(item => {
              return (
                <li key={ item.url }>{ item.title }</li>
              )
            })}
          </ul>
        </nav>
        <MDXRenderer>{ body }</MDXRenderer>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  max-width: 80rem;
  margin: auto;

  .header-info {
    align-items: center;
    color: var(--clr-beta);
    display: flex;
    font-size: var(--font-small);
  }

  .author-img {
    border-radius: 50%;
  }

  .circle {
    background-color: var(--clr-alpha);
    border-radius: 50%;
    display: inline-block;
    height: .8rem;
    margin: 0 .8rem .4rem .8rem;
    width: .8rem;
  }

  & > * {
    margin-bottom: 2.5rem;
  }

  a {
    color: var(--clr-psi);
    text-decoration: underline;

    &:hover {
      color: var(--clr-alpha);
      text-decoration: none;
    }
  }

  ol {
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
`

export const query = graphql`
  query GetSinglePost ($slug: String){
    mdx( frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        slug
        title
      }
      body
      tableOfContents
      timeToRead
    }
  }
`

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate
