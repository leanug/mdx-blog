import React from 'react'
import Code from './src/components/Code'
import Layout from './src/components/Layout'
import 'normalize.css'
import { preToCodeBlock } from 'mdx-utils'
import { MDXProvider } from '@mdx-js/react'

const components = {
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        if (props) {
            return <Code {...props} />
        }
        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>
}

export const wrapPageElement = ({ element, props }) => (
    <MDXProvider components={ components }>
        <Layout { ...props }>
            { element }
        </Layout>
    </MDXProvider>
)