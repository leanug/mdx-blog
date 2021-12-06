import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/vsDark'
import styled from 'styled-components'

const Code = ({ codeString, language, ...props }) => {
    return (
      <Wrapper>
        <Highlight { ...defaultProps } code={ codeString } language={ language } theme={ theme }>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  pre {
    font-size: 1.6rem;
    height: 100%;
    padding: 2rem;
    overflow-x: scroll;
    width: calc(100vw - 6rem);

    @media screen and (min-width: 840px) {
      width: var(--content-width);
    } 
  }
`

export default Code
