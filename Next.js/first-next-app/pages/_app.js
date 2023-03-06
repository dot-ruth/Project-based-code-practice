import Layout from './Components/Layout'
import '@/styles/globals.css'
import Home from '.'


 function App({ Component, pageProps }) {
  return (
    <Layout>
 <Component {...pageProps} />
    </Layout>
  )
}

export default App
