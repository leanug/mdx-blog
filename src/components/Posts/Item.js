import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = ({ date, excerpt, humanDate, image, slug, title }) => {
    const img = getImage( image )
    
    return (
        <Wrapper image>
            { image && 
                <div>
                    <Link to={ `/${slug}` }>
                        <GatsbyImage
                            alt={ title }
                            imgClassName="img" 
                            image={ img } alt={ title }
                            loading="lazy"
                        />
                    </Link>
                </div>
            }
            <div className="container">
                <span className="date">
                    Updated: <time dateTime={ date }>{ humanDate }</time>
                </span>
                <Link to={ `/${slug}` }>
                    <h2>{ title }</h2>
                </Link>
                <p>{ excerpt }</p>
                <Link className="read-more" to={ `/${slug}` }>
                    Continue Reading
                </Link>
            </div>
        </Wrapper>
    )
} 
  
const Wrapper = styled.section`
    align-items: center;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 30rem 1fr;
    grid-gap: 2rem;

    &:not(:last-child) {
        margin-bottom: 4rem;
    }

    @media screen and (max-width: 576px) {
        display: block;
        margin-bottom: 6rem;

        .container {
            margin-top: 2rem;
        }
    }

    .img {
        border-radius: var(--radius-alpha);
        margin-right: 2rem;
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
        font-size: var(--font-small);
        margin-top: 1rem;
        padding: 1rem 1.8rem;
    }
`
  
export default Item