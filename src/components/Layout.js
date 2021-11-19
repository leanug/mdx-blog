import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import BackToTopBtn from './BackToTopBtn'
import Footer from './Footer'
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
  const [theme, setTheme] = useState('light')
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = _ => {
    setShowSidebar(! showSidebar)
  }

  const toggleTheme = _ => {
  if (theme === 'light') {
    setTheme('dark') 
    url && window.localStorage.setItem('theme', 'dark')
    return
  } 

  setTheme('light') 
    url && window.localStorage.setItem('theme', 'light')
  }

  useEffect(() => {
  const localTheme = window.localStorage.getItem('theme')
  localTheme && setTheme(localTheme);
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
        <Header 
          toggleTheme={ toggleTheme }
          toggleSidebar={ toggleSidebar }
          pathname={ pathname } 
        />
        <main>
          { children }
        </main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;

  main {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout