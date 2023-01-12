import {  useTheme, Heading, Icon, Button, Flex, View, Text } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from 'next/router'
import { IoMdReturnLeft } from 'react-icons/io'

function Traveling() {
  
  const router = useRouter()
  const { tokens } = useTheme() 

  function Travel() {
    return (
      <>

        <Heading>Documents</Heading>
        <Text>Make sure you have a passport valid for more than 6 months</Text>
        <Text>Register for an ESTA</Text>

        <Heading>Logistics</Heading>
        <Text>SIM Card: We'll provide you with one.</Text>
        <Text>Our Airport is: SEA Seattle-Tacoma</Text>

        <Heading>Driving Guide</Heading>
        <Text>Turn on red: In the US you can turn to the right (if not explicitly denied) if a traffic light is red and there is not traffic.</Text>
        <Text>The speed in traffic is generally lower with a tempo limit of 120 km/h.</Text>
        <Text>You need to be quite a bit more careful since people tend to often overtake on the right.</Text>
      
       Last updated January 10, 2023
      </>
    )
  }

  return (<Flex direction='column' justifyContent='center' alignItems='center' padding='3rem'>
      <Button borderRadius={tokens.radii.xl} variation='primary' size='small' onClick={() => router.push('/')} ><Icon viewBox={{width: 550, height: 550}} as={IoMdReturnLeft} ariaLabel='Return button'/></Button>
      
      <Heading level={4} paddingTop='2rem'>Our Tips for Traveling</Heading>
      <Travel />
    </Flex>)
}

export default Traveling