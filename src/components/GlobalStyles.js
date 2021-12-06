import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --clr-alpha: ${ ({ theme }) => theme.alpha }; // Primary
        --clr-beta: ${ ({ theme }) => theme.beta }; // Text
        --clr-gamma: ${ ({ theme }) => theme.gamma };
        --clr-delta: ${ ({ theme }) => theme.delta }; // Soft background
        --clr-epsilon: ${ ({ theme }) => theme.epsilon }; // Borders
        --clr-omega: ${ ({ theme }) => theme.omega }; // Background
        --clr-psi: ${ ({ theme }) => theme.psi }; // Text
        --font-small: 1.4rem;
        --line-height-alpha: 1.5;
        --line-height-beta: 2;
        --max-width: 140rem;
        --content-width: 80rem;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 2rem;
        --primary-font: Ubuntu, Helvetica, Arial, sans-serif;
        --secondary-font: Ubuntu, Helvetica, Arial, sans-serif;
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% !important;
    }

    body {
        background-color: var(--clr-omega);
        color: var(--clr-beta);
        font-family: var(--primary-font);
        font-size: 1.8rem;
        line-height: var(--line-height-alpha);
        transition: color 0.25s linear;
    }

    .wrapper {
        max-width: var(--max-width);
        margin: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 100%;
    }

    .wrapper-fluid {
        padding-left: calc(2rem + 4vw);
        padding-right: calc(2rem + 4vw);

        @media screen and ( max-width: 576px ) {
            padding: 0 2rem;
        }
    }

    .header-1, h1,
    .header-2, h2,
    .header-3, h3,
    .header-4, h4,
    .header-5, h5,
    .header-6, h6,
    .display-one,
    .display-two,
    .display-three,
    .display-four  {
        color: var(--clr-psi);
        font-family: var(--secondary-font);
        line-height: var(--line-height-alpha);
        margin: 0;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        .header-1, h1 { font-size: 2.2rem; }
        .header-2, h2 { font-size: 2rem; }
        .header-3, h3 { font-size: 1.8rem; }
        .header-4, h4 { font-size: 1.6rem; }
        .header-5, h5 { font-size: 1.4rem; }
        .header-6, h6 { font-size: 1.2rem; }
    }

    a {
        color: var(--clr-beta);
        cursor: pointer;
        text-decoration: none;
        transition: all 0.2s linear;
    }

    a:hover {
        color: var(--clr-alpha);
        text-decoration: none;
    }

    a.button:hover {
        text-decoration: none;
    }

    aside {
        ul {
            list-style: none;
        }
    }
    
    p {
        color: var(--clr-beta);
    }

    .button {
        border: none;
        border-radius: var(--radius-alpha);
        color: var(--clr-omega);
        cursor: pointer;
        font-weight: 600;
        padding: 1.4rem 2.2rem;
    }

    .text-alpha {
        color: var(--clr-alpha);
    }

    .mdx-img .gatsby-resp-image-wrapper,
    .mdx-img .gatsby-resp-image-background-image,
    .mdx-img .gatsby-resp-image-image {
        border-radius: var(--radius-alpha);
        max-width: 100% !important;
        width: 100%;
        &:not(:last-of-type) {
            margin-bottom: 3rem;
        }
    }
`

export default Globals