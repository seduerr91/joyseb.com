import '../configureAmplify'
import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'

import theme from '../styles/theme'

import Layout from './components/Layout'
import Meta_Component from './components/Meta_Component'

import { useState, useEffect } from 'react'
import { Flex, useTheme, ThemeProvider, useBreakpointValue } from '@aws-amplify/ui-react'

function MyApp({ Component, pageProps }) {

  const [colorMode, setColorMode] = useState('system')
  const { tokens } = useTheme()
  const device = useBreakpointValue({ base: 'phone', small: 'phone', medium: 'tablet', large: 'computer' })
    
  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <Meta_Component />
      <Flex direction='column' backgroundColor={tokens.colors.neutral[10]} minHeight='100vh' gap='0'>
          <Flex paddingLeft='.3rem' paddingRight='.3rem' justifyContent='center' direction='column'>
            <Layout z-index='-10' class="wrapper">
              <Component {...pageProps} />
            </Layout>
          </Flex>
      </Flex>
    </ThemeProvider>
  )
}

export default MyApp