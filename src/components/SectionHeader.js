import React from 'react'
import styled from 'styled-components'

const SectionHeader = ({ text }) => {
    return (
        <Wrapper>
            <Circle />
            <span>{ text }</span>
            <Line />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: var(--secondary-font);
    font-size: 2rem;
    margin-bottom: 3rem;

    span:first-child {
        color: var(--clr-psi);
        font-size: 1.4rem;
        margin-right: 1rem;
    }
`

const Line = styled.div`
    background-color: var(--clr-delta);
    display: inline-block;
    height: 1px;
    max-width: 14rem;
    margin-left: 1.2rem;
    margin-bottom: .6rem;
    width: 100%;

    @media screen and ( min-width: 576px ) {
        max-width: 24rem;
    }
`

const Circle = styled.div`
    background-color: var(--clr-alpha);
    border-radius: 50%;
    display: inline-block;
    margin-bottom: .08rem;
    margin-right: 1rem;
    height: 1rem;
    width: 1rem;
`

export default SectionHeader