import React from 'react'
import Categories from '../components/Categories'
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
      timeToRead
    }, 
  } = data

  return (
    <>
        <Seo 
          title={ title }
        />
        <Wrapper>
          <aside>
            <Categories />
          </aside>
          
          <div className="body">
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
            <MDXRenderer>{ body }</MDXRenderer>
          </div>

          <aside>
          </aside>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 80rem 1fr;
    grid-gap: 4rem;
    
    @media screen and ( max-width: 768px ) {
        grid-gap: 6rem 8rem;
    }

    .header-info {
      align-items: center;
      display: flex;
      font-size: var(--font-small);
      margin-left: 1rem;
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

    .body {
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
