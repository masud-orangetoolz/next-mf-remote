import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {storeWrapper} from "../src/state/store";
import '../styles/globals.css'

export default function App({Component, ...rest}: AppProps) {
    const {store, props} = storeWrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}
