import React, { useState, useEffect } from 'react'
import Categories from '../components/Categories'
import GlobalStyles from './GlobalStyles'
import BackToTopBtn from './BackToTopBtn'
import Footer from './Footer'
import Newsletter from '../components/Newsletter'
import Header from './Header'
import { lightTheme, darkTheme } from '../theme';
import PropTypes from "prop-types"
import Sidebar from './Sidebar'
import styled, { ThemeProvider } from 'styled-components'

const Layout = ({ children, location: { pathname } }) => { 
  /* Checks if window exists for saving the theme in local storage */
  const url = typeof window !== 'undefined' 
    ? window.location.href 
    : ''
    
  /* Dark and Light themes */
  const [ theme, setTheme ] = useState( 'light' )
  const [ showSidebar, setShowSidebar ] = useState( false )

  const toggleSidebar = _ => {
    setShowSidebar( ! showSidebar )
  }

  const toggleTheme = _ => {
  if ( theme === 'light' ) {
    setTheme( 'dark') 
    url && window.localStorage.setItem( 'theme', 'dark' )
    return
  } 

  setTheme( 'light' ) 
    url && window.localStorage.setItem( 'theme', 'light' )
  }

  useEffect( () => {
  const localTheme = window.localStorage.getItem( 'theme' )
  localTheme && setTheme( localTheme );
  }, []);

  return (
    <ThemeProvider 
      theme={ theme === 'light' ? lightTheme : darkTheme }
    >
      <GlobalStyles />
      <Sidebar 
        toggleSidebar={ toggleSidebar }
        showSidebar={ showSidebar }
        />
      <BackToTopBtn />
      <PageWrapper>
        <Header toggleTheme={ toggleTheme } pathname={ pathname } />
        <main>
          <aside>
            <Newsletter />
            <br />
            <Categories />
          </aside>
          <article>
            { children }
          </article>
        </main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(1fr, 70rem) 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  main {
    display: grid;
    grid-template-columns: 30rem 80rem;
    grid-gap: 8rem;
    margin: auto;
    max-width: var(--max-width);
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout