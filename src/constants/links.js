import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Links = ({ styleClass, children }) => {
  return (
    <Wrapper className={ styleClass }>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li className="sublist">
        <span className="sublist-name">Categories</span>
        { children }
      </li>
      <li>
        <Link to="/newsletter" className="page-link">
          Newsletter
        </Link>
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  &.sidebar-links {
    li:not(:last-of-type) {
      margin-bottom: 2rem;

      .sublist-name {
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }

  &.horizontal-links {
    display: flex;
    list-style-type: none;
    margin-left: 3rem;

    li {
      font-size: var(--font-small);
      font-weight: 500;
      margin-right: 3rem;
    }

    .sublist {
      display: none;
    }

    a {
      color: var(--clr-beta);
    }
  }
`

export default Links