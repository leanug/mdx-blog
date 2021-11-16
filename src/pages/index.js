import React from 'react'
import Categories from '../components/Categories'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const IndexPage = ({ data }) => {
    const { allMdx: { nodes: posts }, categories } = data
    
    return (
        <>
            <Seo />
            <Wrapper>
                <aside>
                    <Categories categories={ categories } />
                </aside>
                <article>
                    <Posts posts={ posts } />
                </article>
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

const Wrapper = styled.section`
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 80rem 1fr;
    grid-gap: 4rem;
    
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
