import {  useTheme, Heading, Icon, Button, Flex, View, Text } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { useRouter } from 'next/router'
import { IoMdReturnLeft } from 'react-icons/io'

function Dates() {
  
  const router = useRouter()
  const { tokens } = useTheme() 

  function Travel() {
    return (
      <>

        <Heading>Important Dates</Heading>
        <Text>September 2, 2022: Joy and Seb got married.</Text>
        <Text>July 8, 2022: Joy and Seb got engaged.</Text>
        <Text>October 23, 2021: Joy and Seb made it official.</Text>
        <Text>October 2, 2021: Joy and Seb started dating.</Text>
        
       Last updated January 10, 2023
      </>
    )
  }

  return (<Flex direction='column' justifyContent='center' alignItems='center' padding='3rem'>
      <Button borderRadius={tokens.radii.xl} variation='primary' size='small' onClick={() => router.push('/')} ><Icon viewBox={{width: 550, height: 550}} as={IoMdReturnLeft} ariaLabel='Return button'/></Button>
      
      <Heading level={4} paddingTop='2rem'>Our Important Dates!</Heading>
      <Travel />
    </Flex>)
}

export default Dates