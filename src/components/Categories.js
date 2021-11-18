import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const Categories = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx {
                distinct(field: frontmatter___category)
            }
        }
    `)
    const { allMdx: { distinct: categories } } = data

    return (
        <>
            <div style={{ fontWeight: '600', marginBottom: '1rem' }}>Categories</div>
            <Wrapper>
                {categories && categories.map((cat, index) => {
                        const catUrl = cat.replace(' ', '-')
                        return (
                            <li key={ index }>
                                <Link to={ `/categories/${ catUrl }` }>{ cat }</Link>
                            </li>
                        )
                    })}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.ul`
    li {
        font-size: var(--font-small);
        line-height: var(--line-height-beta);
        text-transform: capitalize;

        a {
            color: var(--clr-alpha);
            font-weight: 600;

            &:hover {
                color: var(--clr-epsilon);
            }
        }
    }
`

export default Categories
