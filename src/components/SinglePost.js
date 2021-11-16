import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'

const SinglePost = ({ post }) => {
    const { frontmatter: { title, category, image, slut }, excerpt } = post
    const img = getImage( image )

    return (
        <div>
            { image && 
                <GatsbyImage 
                    imgClassName="img" 
                    image={ img } alt={ title }
                    loading="lazy"
                />
            }
        </div>
    )
}

SinglePost.propTypes = {

}

export default SinglePost
