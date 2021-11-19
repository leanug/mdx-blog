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

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 30rem 1fr;
    max-width: var(--max-width);
    margin: auto;
    grid-gap: 8rem;

    @media screen and (max-width: 1200px) {
        display: block;
        margin: auto;
        padding: 0 1rem;
        max-width: 80rem;

        aside {
            display: none;
        }
    }
`

export const query = graphql`
{
    allMdx(limit: 6, sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                category
                humanDate: date(formatString: "YYYY MMMM Do")
                date
                image {
                    childImageSharp {
                        gatsbyImageData(
                            height: 576
                            placeholder: BLURRED
                            width: 576
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
