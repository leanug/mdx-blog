import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Item = ({ 
    author, 
    date, 
    excerpt, 
    humanDate, 
    image, 
    slug, 
    title 
}) => {
    const img = getImage( image )

    return (
        <Wrapper>
            <header style={{ marginBottom: '2.2rem' }}>
                <Link to={ `/${slug}` }>
                    <h2>{ title }</h2>
                </Link>
                <div style={{ marginTop: '1rem' }}>
                    <StaticImage
                        alt="author"
                        height={ 30 }
                        src="../../images/author/author.jpg"
                        width={ 30 }
                        className="author-img"
                    />
                    <span>
                        by { author } · Updated: <time dateTime={ date }>{ humanDate }</time>
                    </span>
                </div>
            </header>
            { image &&
                <Link to={ `/${slug}` }>
                    <GatsbyImage
                        alt={ title }
                        imgClassName="img" 
                        image={ img }
                        loading="lazy"
                    />
                </Link>
            }
            <div style={{ margin: '2rem auto 0 auto' }}>
                <p>{ excerpt }</p>
                <Link className="read-more" to={ `/${slug}` }>
                    Continue Reading
                </Link>
            </div>
        </Wrapper>
    )
} 
  
const Wrapper = styled.section`
    height: 100%;
    margin: auto;
    width: 100%;

    &:not(:last-of-type) {
        border-bottom: 1px solid var(--clr-gamma);
        margin-bottom: 2.5rem;
        padding-bottom: 4rem;
    }

    .img {
        border-radius: var(--radius-alpha);
    }   
    
    .info {
        align-items: center;
        display: flex;
    }

    .author-img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    .container {
        margin-top: 2rem;
    }

    h2 { padding: .5rem 0; }

    .category {
        text-transform: capitalize;
        margin-right: 2rem;
        height: 100%;
        width: 100%;
    }
    
    span {
        font-size: var(--font-small);
    }

    .date {
        color: var(--clr-beta);
    }

    .link {
        display: flex;
        align-items: center;

        span {
            margin-left: 1rem;
        }
    }

    .read-more {
        background-color: var(--clr-alpha);
        border-radius: var(--radius-alpha);
        color: var(--clr-omega);
        display: inline-block;
        font-weight: 600;
        margin-top: 1.5rem;
        padding: 1rem 2.2rem;

        &:hover {
            background-color: var(--clr-epsilon);
        }
    }
`

Item.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    humanDate: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
}

export default Item