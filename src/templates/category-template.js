import React from 'react'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const CategoryTemplate = props => {
    const { allMdx: { nodes: posts } } = props.data

    return (
        <>
            <Seo />
            <Wrapper>
                <h1 style={{ marginBottom: '1rem' }}>{ props.pageContext.category }</h1>
                <Posts posts={ posts } />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin: auto;
    max-width: var(--content-width);

    h1 {
        font-size: 3.2rem;
        text-transform: capitalize;
    }
`

export const query = graphql`
    query GetCategories ($category: String){
    allMdx(
        limit: 6, 
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {category: {eq: $category}}}
        ) {
            nodes {
                frontmatter {
                    author
                    category
                    date
                    humanDate: date(formatString: "YYYY MMMM Do")
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                width: 850
                                height: 450
                            )
                        }
                    }
                    slug
                    title
                }
                excerpt
                id
            }
        }
    }
`

export default CategoryTemplate
