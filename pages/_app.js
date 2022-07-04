import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // We could add a layout, a header, footer and the rest here
  return (
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
