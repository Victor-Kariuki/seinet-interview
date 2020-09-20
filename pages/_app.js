import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from '../utils/theme'
import { Provider } from 'react-redux'

import store from '../store'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
