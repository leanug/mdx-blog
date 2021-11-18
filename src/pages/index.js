import React from 'react'
import { graphql } from "gatsby"
import Posts from '../components/Posts'
import Seo from '../components/SEO'

const IndexPage = ({ data }) => {
    const { allMdx: { nodes: posts } } = data
    
    return (
        <>
            <Seo />
            <h1 style={{ marginTop: 0, marginBottom: '6rem' }}>
                Welcome to AlienShip 🛸 <br />
                Front-end and design articles from outer space.
            </h1>
            <Posts posts={ posts } />
        </>
    )
}

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
