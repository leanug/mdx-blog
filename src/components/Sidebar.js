import React from 'react'
import Categories from '../components/Categories'
import Close from './icons/Close'
import styled from 'styled-components'

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <Wrapper 
        className={ `${ showSidebar ? 'sidebar showSidebar' : 'sidebar' }` }
        aria-label="Main sidebar containing navigation links"
    >
      <div className="btn-container">
          <button 
            onClick={ toggleSidebar } 
            className="close-btn"
            aria-label="Close sidebar"
          >
            <Close />
          </button>
      </div>
      <div className="sidebar-content">
        <div className="content">
          <Categories />
        </div>
      </div>
    </Wrapper>
  )
}

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
      padding: 5rem 3rem;
      position: fixed;
      right: 0;
      transition: all 0.2s ease-out;
      transform: translateX(100%);
      top: 0;
      z-index: 999;

      a {
        font-size: 1.7rem;
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

      .sidebar-content {
        width: 100%;
        display: flex;
        align-items: center;
        height: 100%;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 10rem;
        width: 100%;

        .wrapper {
          margin: 1rem 0;
          text-align: center;

          div {
            color: ${({ theme }) => theme.delta };
            font-size: 1.2rem;
          }
        }
      }

      .links-container {
        padding-top: 2rem;
      }

      &.showSidebar {
        transition: all 0.2s ease-out;
        transform: translateX(0);
      }

      .nav-btn {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.psi };
        cursor: pointer;
        font-family: var(--secondary-font);
        font-size: 2rem;
        transition: color 0.25s linear;
      }
    }
`

export default Sidebar