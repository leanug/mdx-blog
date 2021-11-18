import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Link } from 'gatsby'

const Item = ({ categories, title, excerpt, image, slug, date }) => {
    const img = getImage( image )
    console.log(date);
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
                    <div className="head">
                        <div className="circle"></div>
                        <span>
                            Updated: <time dateTime="2017-02-14">{ date }</time>
                        </span>
                    </div>
                    <h2>{ title }</h2>
                    <p>{ excerpt }</p><span className="read-more">Continue Reading</span>
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

    .head {
        align-items: center;
        color: var(--clr-beta);
        display: flex;
        margin-bottom: .4rem;
    }

    .circle {
        background-color: var(--clr-alpha);
        border-radius: 50%;
        height: .8rem;
        margin-bottom: .3rem;
        margin-right: 1rem;
        width: .8rem;
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
    }
`
  
export default Item