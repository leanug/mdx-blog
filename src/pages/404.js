import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/SEO'
import styled from 'styled-components'

const NotFoundPage = () => {
    return (
        <>
            <Seo title="404 - Page not found" />
            <Wrapper>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '3rem' }}>404<br />Page not found</h1>
                    <Link className="button" to="/">Home</Link>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;

    .button {
        background-color: var(--clr-alpha);
        border-radius: var(--radius-alpha);
        padding: 1.4rem 3rem;

        &:hover {
            color: var(--clr-omega);
        }
    }
`

export default NotFoundPage
