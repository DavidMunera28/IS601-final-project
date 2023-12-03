import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>WayWize Mapping & Wayfinding Solutions</title>
      <meta name="description" content="Discover seamless outdoor and indoor navigation with our mapping and wayfinding solutions. Our software offers effortless navigational precision and a user-friendly layout." />
    </Head>
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
