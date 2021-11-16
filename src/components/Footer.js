import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrapper>
            <div className="wrapper">
                <div>
                    <span style={{ fontWeight: '700' }}>AlienShip</span>
                    <span>Made by Leandro</span>
                    <span>Newsletter</span>
                    <span>About</span>
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
        .wrapper {
            display: flex;
            justify-content: space-between;
        }
    }

    a {
        font-size: 1.4rem;    
    }
`

export default Footer
