import '../global.scss'; // include global styles
import type { AppProps } from 'next/app' // https://nextjs.org/docs/basic-features/typescript#custom-app

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }
  