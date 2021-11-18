import React from 'react'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const CategoryTemplate = ({ data }) => {
    const { allMdx: { nodes: posts }, categories } = data

    return (
        <>
            <Seo />
            <Wrapper>
                <aside>
                    <Categories categories={ categories } />
                </aside>
                <section>
                    <div>
                        Home - Javascript
                    </div>
                    <Posts posts={ posts } />
                </section>
                <aside>
                    <Newsletter />
                </aside>
            </Wrapper>
        </>
    )
}


const Wrapper = styled.section`
    max-width: var(--max-width);
    margin: auto;
    display: grid;
    grid-template-columns: 26rem 80rem 26rem;
    grid-gap: 4rem;
    
    @media screen and ( max-width: 768px ) {
        grid-gap: 6rem 8rem;
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
    }
`

export default CategoryTemplate
