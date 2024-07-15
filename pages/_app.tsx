import '../styles/globals.css'
import { AppProps } from "next/app";
import { MainLayout, EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
import { SWRConfig } from 'swr';
import axiosClient from '@/api/axios-client';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {theme, createEmotionCache} from '@/utils/index'
import { CacheProvider } from '@emotion/react';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppPropsWithLayout){
    const Layout = Component.Layout ?? EmptyLayout
    return (
        <CacheProvider value={emotionCache}>
            <Head>
              <meta name="viewport" content="initial-scale=1, width=device-width" />
           </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SWRConfig value={{fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false}}>
                    <Layout>
                        <Component { ... pageProps } />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </CacheProvider>
    )
}
export default MyApp