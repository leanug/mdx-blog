import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

const Categories = ({ styleClass }) => {
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
            <Wrapper className={styleClass}>
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
        }
    }

    &.sidebar-categories {
        margin-left: 2rem;
        margin-top: 2rem;

        li {
            a {
                font-size: var(--font-small);
            }
        }
    }

    &.header-categories {
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;

        li {
            margin-right: 1rem;
            
            a {
                border: 1px solid var(--clr-epsilon);
                border-radius: var(--radius-alpha);
                display: inline-block;
                font-size: var(--font-small);
                padding: .3rem 1.5rem;

                @media screen and (max-width: 600px) {
                    margin-bottom: 1rem;
                }

                &:hover {
                    background-color: var(--clr-delta);;
                }
            }
        }
    }
`

export default Categories
