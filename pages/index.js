import { Grid, Collection, Icon, Heading, Image, Flex, useBreakpointValue, Link, Text, Card } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

function Home() {

  const device = useBreakpointValue({base: 'phone',small: 'phone', medium: 'tablet', large: 'computer'})

  return (
    <Flex direction="column" alignItems='center' justifyContent='center'>
    
      <Card gap='1rem' width='90vw' padding='2rem'>
        <Flex alignItems='center' justifyContent='center'>

          <Flex direction='column' alignItems='center' paddingLeft='.5rem' paddingBottom='1rem' paddingRight='.5rem'>  
              <Image alt="Joy & Seb" src="./img/profile.png" height="12rem" opacity="100%"/>
              <Heading level={5}> Welcome to Joy and Seb's Page</Heading>
              
              <Link href="/visitors">
                  <Card padding='1rem' justifyContent='center' variation='elevated' >
                  <Flex direction="column" alignItems='center' justifyContent='center'>
                  <Heading>Vistors</Heading>
                  </Flex>
                </Card> 
              </Link>
              {/* <Image alt="Joy & Seb" src="./img/snoq2.png" width="40%" opacity="100%"/> */}
              
              <Link href="/suggestions">
                <Card padding='1rem' justifyContent='center' variation='elevated' >
                  <Flex direction="column" alignItems='center'  justifyContent='center'>
                  <Heading>Our Suggestions</Heading>
                  </Flex>
                </Card> 
              </Link>
              {/* <Image alt="hiking" src="./img/hiking.jpg" width="40%" opacity="100%"/> */}
              
              <Link href="/traveling">
                <Card padding='1rem' justifyContent='center' variation='elevated' >
                  <Flex direction="column" alignItems='center' justifyContent='center'>
                  <Heading>International Travel</Heading>
                  </Flex>
                </Card> 
              </Link>

            </Flex>

        </Flex>
      </Card>
      </Flex>

  )

}

export default Home