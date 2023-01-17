import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const MainLayouts = ({ children, title }) => {
    return (
        <>
            <Head>
                {/* <title>{title ? title + ' | Pintirim' : 'Pintirim'}</title> */}
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default MainLayouts