import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { KioskProvider} from '../context/KioskProvider'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <KioskProvider>
           <Component {...pageProps} />
      </KioskProvider>
     
  )
}

export default MyApp
