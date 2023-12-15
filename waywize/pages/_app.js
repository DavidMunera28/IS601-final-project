import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '@/styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      {/* Begin metadata */}
      <title>WayWize Mapping & Wayfinding Solutions</title>
      <meta name="description" content="Discover seamless outdoor and indoor navigation with our mapping and wayfinding solutions. Our software offers effortless navigational precision and a user-friendly layout." />
      <meta name="keywords" content="customized mapping, customized wayfinding, navigation app, indoor navigation, AI mapping, event venue mapping, indoor mapping software, custom business mapping" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* End metadata */}
      {/* Begin favicon */}
      <link rel="icon" href="/favicon.ico" />
      {/* End favicon */}
      {/* Begin font download */}
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"
      />
      {/* End font download */}
    </Head>
    {/* Begin Google Analytics tag */}
    <GoogleAnalytics GA_MEASUREMENT_ID = 'G-F248M41PQ7' />
    {/* End Google Analytics tag */}
    {/* Begin visible site elements */}
    <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    <CookieBanner />
    </ChakraProvider>
    {/* End visible site elements */}
    </>
  )
}
