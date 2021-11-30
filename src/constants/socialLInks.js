import React from "react"
import GitHub from '../components/icons/GitHub'
import Twitter from '../components/icons/Twitter'
import Instagram from '../components/icons/Instagram'
import styled from 'styled-components'

const SocialLinks = () => {
    return (
        <Wrapper>
            <li>
                <a href="https://twitter.com">
                    <Instagram />        
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                    <Twitter />         
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                    <GitHub />         
                </a>
            </li>
        </Wrapper>
    )
}

const Wrapper = styled.ul`
    align-items: center;
    display: flex;
    list-style-type: none;

    li {
        margin-right: 3rem;
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fit, 1fr);
        grid-gap: 3rem;

        li {
            margin-right: 0;
        }
    }
`

export default SocialLinks