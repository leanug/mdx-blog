import React from 'react'
import Categories from '../components/Categories'
import Close from './icons/Close'
import Links from '../constants/links'
import styled from 'styled-components'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <Wrapper 
        className={ `${ showSidebar ? 'sidebar showSidebar' : 'sidebar' }` }
        aria-label="Main sidebar containing navigation links"
    >
      <div className="btn-container">
          <Button 
            onClick={ toggleSidebar }
            className="close-btn"
            aria-label="Close sidebar"
          >
            <Close />
          </Button>
      </div>
      <div className="content">
        <Links styleClass="sidebar-links">
          <Categories styleClass="sidebar-categories" />
        </Links>
      </div>
    </Wrapper>
  )
}

const Button = styled.button`
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

const Wrapper = styled.aside`
  &.sidebar {
    background-color: var(--clr-psi);
    color: var(--clr-omega);
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr;
    height: 100vh;
    min-width: 32rem;
    overflow-x: hidden;
    padding: 2rem;
    position: fixed;
    right: 0;
    transition: all 0.2s ease-out;
    transform: translateX(100%);
    top: 0;
    z-index: 999;

    a {
      color: var(--clr-omega);
      font-size: 1.6rem;
      font-weight: 600;
    }

    .btn-container {
      display: flex;
      justify-content: flex-end;
    }

    .close-btn {
      background-color: transparent;
      border: none;
      color: var(--clr-omega);
      cursor: pointer;
      font-size: 3rem;
    }

    &.showSidebar {
      transition: all 0.2s ease-out;
      transform: translateX(0);
    }
  }
`

export default Sidebar