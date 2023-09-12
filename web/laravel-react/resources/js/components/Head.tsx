import React from 'react'
import { Helmet } from 'react-helmet-async'

const VITE_APP_ENV = import.meta.env.VITE_APP_ENV

type Props = {
    title?: string
    description?: string
}

export const Head = (props: Props) => {
    const { title, description } = props

    return (
        <Helmet>
            <title>{ VITE_APP_ENV }-{title ?? 'Bref React Test'}</title>
            <meta name="description" content={description ?? 'This is Bref React Test'} />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Helmet>
    )
}

export default Head
