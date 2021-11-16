import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
    return (
        <Wrapper>
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.button`
    background-color: var(--clr-alpha);
    border: none;
    cursor: pointer;
    padding: 1rem 2rem;
`

export default Button
