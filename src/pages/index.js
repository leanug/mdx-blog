import React from 'react'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const IndexPage = ({ data }) => {
    const { allMdx: { nodes: posts } } = data

    return (
        <>
            <Seo />
            <Wrapper>
                <h1 style={{ marginBottom: '3rem' }}>
                    OneBlog<br />
                    This is a Gatsby MDX blog template 🚀
                </h1>
                <Posts posts={ posts } />
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin: auto;
    max-width: var(--content-width);
`

export const query = graphql`
{
    allMdx(limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                author
                category
                humanDate: date(formatString: "YYYY MMMM Do")
                date
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
    categories: allMdx {
        distinct(field: frontmatter___category)
    }
}
`

export default IndexPage
