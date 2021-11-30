import React from 'react'
import Item from './Item'
import PropTypes from "prop-types"

const Posts = ({ posts }) => {
    return (
        <div>
            { posts && posts.map((post, index)  => {
                const { 
                    frontmatter: { 
                        author,
                        category, 
                        date, 
                        humanDate, 
                        title, 
                        image, 
                        slug 
                    }, excerpt 
                } = post

                return (
                    <Item
                        author={ author }
                        categories={ category }
                        date={ date }
                        excerpt={ excerpt }
                        humanDate={ humanDate }
                        image={ image } 
                        key={ index } 
                        slug={ slug } 
                        title={ title } 
                    />
                )
            })}
        </div>
    )
}

Posts.defaultProps = {
    posts: []
}

Posts.propTypes = {
    posts: PropTypes.array
}

export default Posts