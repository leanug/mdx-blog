import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Breadcrumbs = ({ category, categories }) => {
    return (
        <Wrapper>
            <Link to="/">Home</Link>
            <span style={{ margin: '1rem' }}>/</span>
            <span style={{ textTransform: 'capitalize' }}>{ category } ({ categories })</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border: 1px solid var(--clr-gamma);
    border-radius: var(--radius-alpha);
    color: var(--clr-beta);
    font-weight: 600;
    padding: 1rem 2rem;
    display: inline-block;
    font-size: var(--font-small);
    margin-bottom: 2rem;

    a {
        color: var(--clr-beta);
        font-weight: 600;
        text-decoration: none !important;
        text-transform: capitalize;

        &:hover {
            color: var(--clr-alpha);
        }
    }
`

export default Breadcrumbs