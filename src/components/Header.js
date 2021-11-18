import React from 'react'
import { Link } from 'gatsby'
import Moon from './icons/Moon'
import styled from 'styled-components'

const Navbar = ({ toggleTheme }) => {

    return (
        <Header>
            <div>
                <Link to="/">
                    <span className="logo">AlienShip</span>
                </Link>
            </div>

            <ThemeTogglerBtn
                aria-label="Dark or light website theme toggler"
                onClick={ toggleTheme }
            >
                <Moon />
            </ThemeTogglerBtn>
        </Header>
    )
}

const Header = styled.header`
    align-items: center;
    background-color: transparent;
    display: flex;
    height: 10rem;
    justify-content: space-between;
    margin: 3rem auto 4rem auto;
    max-width: var(--max-width);
    width: 100%;
    transition: color 0.3s linear;

    .logo {
        display: flex;
        font-weight: 700;
    }

    .btn {
        background-color: var(--clr-alpha);
        color: var(--clr-omega);
        border-radius: var(--radius-alpha);
        font-size: 1.4rem;
        font-family: var(--secondary-font);
        font-weight: 600;
        padding: 1.6rem 2.6rem;

        &:hover {
            text-decoration: none;
        }
    }

    .btn-wrapper {
        transition: transform 0.3s linear;
    }
`

const ThemeTogglerBtn = styled.button`
    align-items: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.gamma };
    border-radius: var(--radius-alpha);
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 48px;
    line-height: 1;
    margin-left: 1rem;
    width: 48px;

    .icon {
        color: ${({ theme }) => theme.psi };
        height: auto;
        transition: all 0.25s linear;
        width: 2rem;
    }
`

export default Navbar