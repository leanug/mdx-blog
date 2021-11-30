import React from 'react'
import SocialLinks from '../constants/socialLInks'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="left-column">
                    <Link style={{ fontWeight: '700' }} to="/newsletter">OneBlog</Link>
                    <span style={{ marginRight: '2rem' }}>
                        <a href="https://unsplash.com">Images from Unsplash</a>
                    </span>
                </div>
                <div>
                    <SocialLinks />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--clr-gamma);
    margin-top: 12rem;
    padding: 2rem;

    * {
        color: var(--clr-psi);
    }

    @media screen and ( min-width: 576px ) {
        .container {
            display: flex;
            justify-content: space-between;
            margin: auto;
            max-width: var(--max-width);
            width: 100%;
        }
    }

    @media screen and ( max-width: 576px ) {
        padding: 1rem 2rem;

        .container {
            div {
                margin: 1rem 0;
            }
        }
    }

    .left-column {
        span, 
        a {
            margin-right: 2rem;
        }
    }

    a {
        font-size: 1.4rem;    
    }
`

export default Footer
