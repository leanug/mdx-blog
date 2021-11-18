import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
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
                <aside>
                    <Categories />
                    <br />
                    <Newsletter />
                </aside>
                <article>
                    <h1 style={{ marginTop: 0, marginBottom: '6rem' }}>
                        Welcome to AlienShip 🛸 <br />
                        Front-end and design articles from outer space.
                    </h1>
                    <Posts posts={ posts } />
                </article>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    max-width: 118rem;
    margin: auto;
    display: grid;
    grid-template-columns: 30rem 80rem;
    grid-gap: 8rem;
    
    @media screen and ( max-width: 768px ) {
        grid-gap: 6rem 8rem;
    }
`

export const query = graphql`
{
    allMdx(limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                category
                date(formatString: "YYYY MMMM Do")
                image {
                    childImageSharp {
                        gatsbyImageData(
                            height: 120
                            placeholder: BLURRED
                            width: 120
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
