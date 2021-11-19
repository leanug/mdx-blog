import React from 'react'
import Layout from './src/components/Layout'
import { MDXProvider } from '@mdx-js/react'
import 'normalize.css'

export const wrapPageElement = ({ element, props }) => (
    <MDXProvider>
        <Layout { ...props }>
            { element }
        </Layout>
    </MDXProvider>
)