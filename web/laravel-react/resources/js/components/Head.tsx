import React from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
    title?: string
    description?: string
}

export const Head = (props: Props) => {
    const { title, description } = props

    return (
        <Helmet>
            <title>{title ?? 'Bref React Test'}</title>
            <meta name="description" content={description ?? 'This is Bref React Test'} />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Helmet>
    )
}

export default Head
