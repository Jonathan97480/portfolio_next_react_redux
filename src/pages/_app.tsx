import '../scss/style.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { wrapper } from '../redux/store'
import { Provider } from 'react-redux'
import { GoogleAnalytics } from "nextjs-google-analytics";

/* console.log = () => { } */

function App({ Component, pageProps, ...rest }: AppProps) {

    const { store, props } = wrapper.useWrappedStore(rest)
    return (
        <Provider store={store}>
            <Layout>
                <GoogleAnalytics trackPageViews strategy="lazyOnload" gaMeasurementId='G-74BXJXK1BB' />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default App
