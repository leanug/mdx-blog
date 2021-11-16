import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Categories = ({ categories }) => {
    return (
        <>
            <div>Categories</div>
            <Wrapper>
                {
                    categories.distinct.map((cat, index) => {
                        const catUrl = cat.replace(' ', '-')
                        return (
                            <li key={ index }>
                                <Link to={ `/${ catUrl }` }>{ cat }</Link>
                            </li>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}

const Wrapper = styled.ul`
    li {
        font-size: var(--font-small);
    }
`

Categories.propTypes = {

}

export default Categories
