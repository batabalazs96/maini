import type { AppProps } from 'next/app'
import Layout from '../conponents/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/bootstrap.scss'
import '../styles/global.scss'
import '../conponents/Layout/Footer/Footer.scss'
import '../conponents/Layout/NavBar/NavBar.scss'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
