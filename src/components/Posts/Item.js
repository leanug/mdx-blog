import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = ({ date, excerpt, humanDate, image, slug, title }) => {
    const img = getImage( image )
    
    return (
        <Wrapper>
            <Link to={ `/${slug}` }>
                { image && 
                    <div>
                        <GatsbyImage
                            alt={ title }
                            imgClassName="img" 
                            image={ img } alt={ title }
                            loading="lazy"
                        />
                    </div>
                }
                <div className="container">
                    <span>Updated: <time dateTime={ date }>{ humanDate }</time></span>
                    <h2>{ title }</h2>
                    <p>{ excerpt }</p>
                    <span className="read-more">Continue Reading</span>
                </div>
            </Link>
        </Wrapper>
    )
} 
  
const Wrapper = styled.article`
    height: 100%;
    width: 100%;

    a {
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-gap: 2rem;
    }

    .img {
        border-radius: var(--radius-alpha);
        margin-right: 2rem;
    }

    &:not(:last-child) {
        margin-bottom: 4rem;
    }

    .category {
        text-transform: capitalize;
        margin-right: 2rem;
        height: 100%;
        width: 100%;
    }
    
    span {
        font-size: var(--font-small);
    }

    .link {
        display: flex;
        align-items: center;

        span {
            margin-left: 1rem;
        }
    }

    .read-more {
        color: var(--clr-alpha);
        display: block;
        margin-top: 1rem;
    }
`
  
export default Item