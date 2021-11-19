import React from 'react'
import { Link } from 'gatsby'
import Burger from './icons/Burger'
import Moon from './icons/Moon'
import styled from 'styled-components'

const Navbar = ({ toggleTheme, toggleSidebar }) => {

    return (
        <Header>
            <div>
                <Link to="/">
                    <span style={{ display: 'flex', fontWeight: '700' }}>
                        AlienShip
                    </span>
                </Link>
            </div>
            <div style={{ width: '20rem', display: 'flex', justifyContent: 'flex-end' }}>
                <ThemeTogglerBtn
                    aria-label="Dark or light website theme toggler"
                    onClick={ toggleSidebar }
                >
                    <Burger />
                </ThemeTogglerBtn>
                <ThemeTogglerBtn
                    aria-label="Dark or light website theme toggler"
                    onClick={ toggleTheme }
                >
                    <Moon />
                </ThemeTogglerBtn>
            </div>
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
`

const ThemeTogglerBtn = styled.button`
    align-items: center;
    background: transparent;
    border: 1px solid var(--clr-gamma);
    border-radius: var(--radius-alpha);
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 48px;
    line-height: 1;
    margin-left: 1rem;
    width: 48px;
`

export default Navbar