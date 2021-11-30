import React from 'react'
import Categories from './Categories'
import Burger from './icons/Burger'
import { Link } from 'gatsby'
import Links from '../constants/links'
import Moon from './icons/Moon'
import PropTypes from 'prop-types'
import SocialLinks from '../constants/socialLInks'
import styled from 'styled-components'
import Sun from './icons/Sun'

const Header = ({ theme, toggleTheme, toggleSidebar }) => {
    return (
        <Wrapper>
            <div className="container">
                <div style={{ display: 'flex' }}>
                    <Link className="logo" to="/">
                        OneBlog
                    </Link>
                    <Links styleClass="horizontal-links hide" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="social-links hide">
                        <SocialLinks />
                    </div>
                    <Button
                        aria-label="Dark or light website theme toggler"
                        onClick={ toggleTheme }
                    >
                        { theme === 'light' && <Sun /> }
                        { theme === 'dark' && <Moon /> }
                    </Button>
                    <Button
                        aria-label="Sidebar toggler"
                        className="close-btn"
                        onClick={ toggleSidebar }
                    >
                        <Burger />
                    </Button>
                </div>
            </div>
            <Categories styleClass="header-categories" />
        </Wrapper>
    )
}

const Wrapper = styled.header`
    background-color: transparent;
    margin: auto;
    max-width: var(--max-width);
    padding-left: 2rem;
    padding-right: 2rem;
    transition: color 0.3s linear;
    width: 100%;

    .container {
        align-items: center;
        display: flex;
        height: 8rem;
        justify-content: space-between;
        margin: auto;
        width: 100%;

        .logo {
            color: var(--clr-psi);
            font-weight: 600;
        }
        
        .social-links {
            align-items: center;
            display: flex; 
            margin-right: 2rem; 
        }

        .close-btn {
             display: none;   
        }

        @media screen and (max-width: 992px) {
            .hide {
                display: none;
            }

            .close-btn {
                display: block;
            }
        }
    }
`

const Button = styled.button`
    align-items: center;
    background: transparent;
    border: 1px solid var(--clr-gamma);
    border-radius: var(--radius-alpha);
    color: var(--clr-beta);
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 48px;
    line-height: 1;
    margin-left: 1rem;
    width: 48px;
`

Header.defaultProps = {
    theme: `light`,
}
  
Header.propTypes = {
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
    toggleSidebar: PropTypes.func,
}

export default Header