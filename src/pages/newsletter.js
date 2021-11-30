import React from 'react'
import styled from 'styled-components'

const NewsletterPage = () => {
    return (
        <Wrapper>
            <h1>Get Exclusive DESIGN Tips</h1>
            <p style={{ marginTop: '1rem' }}>
                Urna molestie at elementum eu facilisis. 
                Sit amet volutpat consequat mauris nunc congue. 
                Diam quam nulla <b>porttitor massa</b> id neque aliquam vestibulum morbi.
            </p>
            <form>
                <input type="email" name="email" placeholder="Email" />
                <input type="button" value="Submit" />
            </form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 75rem;
    margin: auto;
    text-align: center;

    form {
        display: inline-block;
        margin-top: 3rem;
    }

    input {
        border-radius: var(--radius-alpha);
        max-width: 20rem;
    }

    input[type="button"],
    input[type="email"] {
        border: none;
        font-size: 1.6rem;
    }

    input[type="button"]{
        background-color: var(--clr-alpha);
        color: var(--clr-omega);
        cursor: pointer;
        font-weight: 600;
        margin-left: -1rem;
        padding: 1.4rem 3rem;
    }

    input[type="email"]{
        background-color: var(--clr-gamma);
        color: var(--clr-psi);
        padding: 1.4rem 2rem;
    }
`

export default NewsletterPage
