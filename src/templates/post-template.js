import React from 'react'
import Categories from '../components/Categories'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PropTypes from 'prop-types'
import Seo from "../components/SEO"
import styled from 'styled-components'

const PostTemplate = ({ data }) => {
  const { 
    mdx: { 
      frontmatter: { title },
      body,
    }, 
  } = data

  return (
    <>
        <Seo 
          title={ title }
        />
        <Wrapper>
          <aside>
            categorias
          </aside>
          
          <div className="body">
            <h1>{ title }</h1>
            <MDXRenderer>{ body }</MDXRenderer>
          </div>

          <aside>
            Adsense Block
            <ul>
                <li>Mas leido numero uno</li>
                <li>Mas leidos numero dos</li>
                <li>Mas leido numero ters y cuatro tambien</li>
            </ul>
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

  .body {

  }

  /* Applies margin bottom to all elements inside MDXRenderer */
  .body > * {
    margin-bottom: 2.5rem;
  }

  a {
    color: var(--clr-alpha);
  }

  ol,
  ul {
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
        slug
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
