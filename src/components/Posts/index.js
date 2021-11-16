import React from 'react'
import Item from './Item'
import PropTypes from "prop-types"
import styled from 'styled-components'

const Posts = ({ posts }) => {
    return (
        <Wrapper>
            { posts && posts.map((post, index)  => {
                const { frontmatter: { category, title, image, slug }, excerpt } = post
                return (
                    <Item 
                        categories={ category }
                        excerpt= { excerpt }
                        image={ image } 
                        key={ index } 
                        slug={ slug } 
                        title={ title } 
                    />
                )
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

Posts.defaultProps = {
    posts: []
}

Posts.propTypes = {
    posts: PropTypes.array
}

export default Posts