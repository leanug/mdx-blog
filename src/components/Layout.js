import React, { useState, useEffect, useCallback } from 'react'
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
  const [currentPage, setCurrentPage] = useState('/')

  const toggleSidebar = useCallback(() => {
    setShowSidebar(! showSidebar)
  }, [showSidebar])

  /* Close sidebar on page change */
  useEffect(() => {
    if (currentPage !== pathname && showSidebar) {
      toggleSidebar()
    }
    setCurrentPage(pathname)
  }, [pathname, showSidebar, currentPage, toggleSidebar])

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
        showSidebar={ showSidebar }
        toggleSidebar={ toggleSidebar }
        pathname={ pathname }
      />
      <BackToTopBtn />
      <PageWrapper>
        <Header
          theme={ theme }
          toggleTheme={ toggleTheme }
          toggleSidebar={ toggleSidebar }
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
    margin-top: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout