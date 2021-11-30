import React from 'react'
import Seo from '../components/SEO'
import styled from 'styled-components'

const about = () => {
    return (
        <>
            <Seo title="About us" />
            <Wrapper>
                <h1 style={{ marginBottom: '3rem' }}>
                    About us<br />
                    Erat nam at lectus urna duis convallis convallis! 🚀
                </h1>
                <h2>
                    Venenatis tellus in metus vulputate. 
                    Et leo duis ut diam quam nulla porttitor massa. 
                    Iaculis eu non diam phasellus vestibulum lorem sed risus. 
                </h2>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    margin: auto;
    max-width: var(--content-width);
`

export default about
