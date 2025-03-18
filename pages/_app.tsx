import '../styles/globals.css';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

Router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
        ym('hit', url);
    }
});

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>MyTop - наш лучший топ</title>
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
                <meta
                    property="og:url"
                    content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
                />
                <meta
                    property="og:locale"
                    content="ru_RU"
                />
            </Head>
            <YMInitializer
                accounts={[]}
                options={{ webvisor: true, defer: true }}
                version="2"
            />
            <Component {...pageProps} />
        </>
    );
}

export default App;
