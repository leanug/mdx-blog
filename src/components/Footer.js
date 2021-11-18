import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="left-column">
                    <Link style={{ fontWeight: '700' }} to="/newsletter">AlienShip</Link>
                    <a href="https://www.leandroubilla.com">Design and built by Leandro</a>
                    <Link to="/newsletter">Newsletter</Link>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <span style={{ marginRight: '2rem' }}> <a href="https://www.instagram.com/aerion.studio/">Instagram</a></span>
                    <span><a href="https://www.fiverr.com/leanug/create-a-responsive-and-fast-website">Fiverr</a></span>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: var(--clr-gamma);
    margin-top: 12rem;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media screen and ( min-width: 576px ) {
        .container {
            display: flex;
            justify-content: space-between;
            max-width: var(--max-width);
            margin: auto;
            width: 100%;
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
