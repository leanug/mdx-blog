import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const CategoryTemplate = (props) => {
    const { allMdx: { nodes: posts } } = props.data

    return (
        <>
            <Seo title={ posts.category } />
            <Wrapper>
                <aside>
                    <Categories />
                    <br />
                    <Newsletter />
                </aside>
                <article>
                    <Breadcrumbs 
                        category={ props.pageContext.category } 
                        categoryPathname= { props.location.pathname }
                        categories={ posts.length }
                    />
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
    query GetCategories ($category: String){
    allMdx(
        limit: 6, 
        sort: {fields: frontmatter___date, order: DESC}
        filter: {frontmatter: {category: {eq: $category}}}
        ) {
            nodes {
                frontmatter {
                    category
                    date
                    humanDate: date(formatString: "YYYY MMMM Do")
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
    }
`

export default CategoryTemplate
