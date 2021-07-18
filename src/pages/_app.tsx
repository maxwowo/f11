import '@fontsource/abel'
import '@fontsource/source-code-pro'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default App
