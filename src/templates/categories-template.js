import React from 'react'
import Categories from '../components/Categories'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'
import styled from 'styled-components'

const CategoriesTemplate = ({ data }) => {
    const { allMdx: { nodes: posts }, categories } = data

    return (
        <>
            <Seo />
            <div>
                <aside>
                    <Categories categories={ categories } />
                </aside>
                Categories Template
            </div>
        </>
    )
}

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

export default CategoriesTemplate
