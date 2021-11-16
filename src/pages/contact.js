import React from 'react'
import Seo from '../components/SEO'
import styled from 'styled-components'

const ContactPage = () => {
    return (
        <>
            <Seo title="Contact" />
            <div className="wrapper">
                <ContactGrid>
                    <div>
                        <h1>
                            We'd love to build something amazing together. Get in touch, let's make it happen.
                        </h1>
                        <a style={{ fontWeight: '700', fontSize: '2rem' }} href="https://www.instagram.com/aerion.studio">Instagram</a>
                        <div style={{ marginTop: '3rem' }}>
                            <p style={{ marginTop: '3rem' }}>Drop us a line</p>
                            <Mail href="mailto:hi@aerion.studio">
                                hi@aerion.studio
                            </Mail>
                        </div>
                    </div>
                    <Wrapper>
                        <form 
                            name="Contact Form" 
                            method="POST" 
                            data-netlify="true"
                            action="/thank-you"
                        >
                            <input type="hidden" name="form-name" value="Contact Form" />
                            <label>Name
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name"
                            />
                            </label>
                            <label>Email
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email"
                            />
                            </label>
                            <label>Message
                            <textarea 
                                placeholder="Message" 
                                name="message" 
                                rows="5" 
                            ></textarea>
                            </label>
                            <button 
                                aria-label="Send message" 
                                className="button bg-dark" 
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </Wrapper>
                </ContactGrid>
                    
            </div>
        </>
    )
}

const ContactGrid = styled.div`
    display: grid;
    grid-gap: 6rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
`

const Mail = styled.a`
    font-size: 4rem;
    font-weight: 700;

    @media screen and ( max-width: 576px ) {
        font-size: 2rem;
    }
`

const Wrapper = styled.div`
    background-color: white;
    border-radius: 1rem;

    label {
        display: block;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

   .info-data > p {
        display: flex;
    }

    p:not(:last-child) {
        margin-bottom: 3rem;
    }

    input[type=text],
    input[type=email],
    textarea {
        background-color: var(--clr-omega);
        border: 1px solid var(--clr-gamma);
        border-radius: 0.5rem;
        font-size: 1.6rem;
        margin-top: .5rem;
        padding: 1.5rem;
        width: 100%;
    }

    .button {
        cursor: pointer;
        padding: 1.7rem 3rem;
        margin-top: 0.5rem;
    }
`

export default ContactPage
