import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Seo from "../components/SEO"

const ThankYouPage = () => {
    return (
        <>
            <Seo 
                description="Success! Thank you for your submission!"
                title="Success! Thank you"
            />
            <Wrapper>
                <h1>Success</h1>
                <h3>Thank you for your submission!</h3>
                <div style={{ marginTop: '3rem' }}>
                    <Link to="/" className="button bg-dark">Home</Link>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    margin: 14rem 0;  
    text-align: center;
`

export default ThankYouPage