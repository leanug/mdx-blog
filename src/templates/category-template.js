import React from 'react'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'

const CategoryTemplate = ({ data }) => {
    const { allMdx: { nodes: posts } } = data

    return (
        <>
            <Seo />
            <div>
                Home - Javascript
            </div>
            <Posts posts={ posts } />
        </>
    )
}

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
