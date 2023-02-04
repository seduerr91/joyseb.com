import { Image, useTheme, Card, Heading, Icon, Button, Flex, Link, View, Text } from '@aws-amplify/ui-react'
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
            <Heading>Address</Heading>
            
            <Text>Welcome to our home at Apartment F102, 34626 SE Swenson Dr, Snoqualmie, WA 98065.</Text>
            
            <Link href='https://goo.gl/maps/wt8GhQy3Nqg5LQZt9'><Button variation='primary'>Navigate with Google</Button></Link>

            <Flex direction='column' padding='2rem'>
              <Card>
                <Heading>Our Postal Address</Heading>
                <Text>Joy Opsvig and Seb Duerr</Text>
                <Text>34626 SE Swenson Dr, Snoqualmie, WA 98065</Text>
                <Text>Apartment F102, Mailbox 44</Text>
              </Card>
            </Flex>

            <Heading>Parking</Heading>
            <Text>Unfortunately, parking is not too easy right inside the Woodlands.</Text>
            <Text>There is two options: straight down on the right side, and the "future resident" parkings are public.</Text>
            <Text>Better parking is leaving Woodlands to the left and following SE Swenson Drive across the bridge for some 200 feet. Then, there is plenty of street parking available.</Text>
            
            <Text>Generally, the I-90 highway exit 25 (Snoqualmie) is getting really busy both ways around rush hour (5:00pm - 7:30pm). Hence, we recommend the highway exit at mile 27 and then to backtrack.</Text>

            <Heading>Getting in</Heading>
            <Text>Upon arrival, just ring our bell.</Text>

            <Heading>Wifi</Heading>
            <Text>Join our Wifi Network by scanning this QR code:</Text>
            <Image height='10rem' width='10rem' src='./img/qr.png'/>

            <Heading>We are happy to have you!</Heading>
          </Flex>
      </View>
    </Flex>
  )
}

export default Visitors