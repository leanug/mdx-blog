import React from 'react'
import styled from 'styled-components'

const Newsletter = () => {
    return (
        <>
            <Wrapper>
                <div style={{ fontWeight: '600', marginBottom: '1rem' }}>Newsletter</div>
                <p style={{ marginBottom: '2rem' }}>
                    Stay up to date with the latest web design and development news and relevant updates from Codrops.
                </p>
                <form>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="button" value="submit" />
                </form>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    border-radius: var(--radius-alpha);
    border: 1px solid var(--clr-gamma);
    padding: 2rem;

    p {
        font-size: var(--font-small);
    }

    form {
        display: flex;
    }

    input {
        border-radius: var(--radius-alpha);
        max-width: 14rem;
    }

    input[type="button"]{
        background-color: var(--clr-alpha);
        border: none;
        color: var(--clr-omega);
        cursor: pointer;
        padding: .6rem 1.2rem;
    }

    input[type="email"]{
        background-color: var(--clr-gamma);
        border: none;
        color: var(--clr-psi);
        padding: .6rem 1.2rem;
    }
`

export default Newsletter
