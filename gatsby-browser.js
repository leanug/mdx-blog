import React from 'react'
import Layout from './src/components/Layout'
import { MDXProvider } from '@mdx-js/react'

const components = {
    h2: props => <h2 { ...props }>{ props.children }</h2>
}

export const wrapPageElement = ({ element, props }) => (
    <MDXProvider components={ components }>
        <Layout { ...props }>
            { element }
        </Layout>
    </MDXProvider>
)