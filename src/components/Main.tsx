import React, { useEffect } from 'react'
import { closeHeader } from '../redux/slice/headerStatu.Slice'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import favIcon from '../images/icons/favicon.ico'
import logo from '../images/icons/logo.png'

interface Props {
    children: React.ReactNode
    className?: string
    pageTitle: string
    pageDescription: string
    schema?: any

}

export default function Main({ children, className, pageTitle, pageDescription, schema }: Props) {
    const HeaderRedux = useSelector((state: any) => state.Header)
    const dispatch = useDispatch()

    const headerClose = () => {
        if (HeaderRedux.isOPen) {
            dispatch(closeHeader(false))
        }
    }



    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="author" content="Gauvin Jonathan"></meta>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={pageTitle} />
                <meta property='og:description' content={pageDescription} />
                <meta property='og:image' content={logo.src} />
                <meta name="twitter:title" content={pageTitle}></meta>
                <meta name="twitter:description" content={pageDescription}></meta>
                <meta name="twitter:image" content={logo.src}></meta>
                <link rel="shortcut icon" href="favicon.ico" type={favIcon.src}></link>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <div onClick={headerClose} className={className}>
                {children}
            </div>

        </>
    )
}
