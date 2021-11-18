import { createGlobalStyle } from 'styled-components'

const Globals = createGlobalStyle`
    :root {
        --clr-alpha: ${ ({ theme }) => theme.alpha };
        --clr-beta: ${ ({ theme }) => theme.beta };
        --clr-gamma: ${ ({ theme }) => theme.gamma };
        --clr-delta: ${ ({ theme }) => theme.delta };
        --clr-epsilon: ${ ({ theme }) => theme.epsilon };
        --clr-omega: ${ ({ theme }) => theme.omega };
        --clr-psi: ${ ({ theme }) => theme.psi };
        --font-small: 1.4rem;
        --line-height-alpha: 1.5;
        --line-height-beta: 2;
        --max-width: 140rem;
        --primary-font: Verdana, Helvetica, Arial, sans-serif;
        --radius-alpha: 0.5rem;
        --radius-beta: 1rem;
        --radius-gamma: 2rem;
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
        color: var(--clr-psi);
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
        font-family: var(--primary-font);
        line-height: var(--line-height-alpha);
        margin: 0;
        font-weight: 600;
    }

    a {
        color: var(--clr-psi);
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

    .bg-light {
        background-color: var(--clr-gamma);
        color: var(--clr-psi);
    }

    .bg-dark {
        background-color: var(--clr-psi);
    }

    .bg-alpha {
        background-color: var(--clr-alpha);
        transition: all 0.2s linear;

        &:hover {
            background-color: var(--clr-alpha-light);
        }
    }

    .text-alpha {
        color: var(--clr-alpha);
    }

    .section-my {
        margin-bottom: calc( 6rem + 10vw );
        margin-top: calc( 6rem + 10vw );

        @media screen and ( min-width: 1200px ) {
            margin-bottom: 16rem;
            margin-top: 16rem;
        }
    }

    .section-mb {
        margin-bottom: calc( 6rem + 10vw );
    }

    .section-mt {
        margin-top: calc( 6rem + 10vw );
    }

    @media screen and ( min-width: 1200px ) {
        .section-mb {
            margin-bottom: 16rem;
        }

        .section-mt {
            margin-top: 16rem;
        }
    }
`

export default Globals