import { Image, useTheme, Icon, Button, Flex, Link, View, Text } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from 'next/router'
import { IoMdReturnLeft } from 'react-icons/io'

function Visitors() {
  
  const router = useRouter()
  const { tokens } = useTheme() 

  return (
          <Flex justifyContent='center'>
          <View>        
          <Flex direction='column' padding='.5rem' alignItems='center' justifyContent='start'>
            <Button borderRadius={tokens.radii.xl} variation='primary' size='small' onClick={() => router.push('/')} ><Icon viewBox={{width: 550, height: 550}} as={IoMdReturnLeft} ariaLabel='Return button'/></Button>
            <Image height='10rem' src='./img/snoq.jpeg'/>
            <Text>Welcome to our home at <Link href='https://goo.gl/maps/wt8GhQy3Nqg5LQZt9'>Apartment F102, 34626 SE Swenson Dr, Snoqualmie, WA 98065</Link>.</Text>


            <Text>Parking is possible right in front of our house or pretty good following SE Swenson Drive across the bridge.</Text>
            <Text>Our I-90 highway exit is getting really busy both ways around rush hour (5:00pm - 7:30pm). Hence, we recommend the highway exit at mile 27 and then to backtrack.</Text>

            
            <Text>Join our Wifi Network by scanning this QR code:</Text>
            <Image height='10rem' width='10rem' src='./img/qr.png'/>
            <Text>Upon arrival, just ring our bell.</Text>
            <Text>We are happy to have you!</Text>
          </Flex>
      </View>
    </Flex>
  )
}

export default Visitors