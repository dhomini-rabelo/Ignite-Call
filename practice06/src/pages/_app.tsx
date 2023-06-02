import type { AppProps } from 'next/app'
import '../layout/assets/styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
