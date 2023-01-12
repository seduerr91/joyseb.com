import {  useTheme, Card, Heading, Icon, Button, Flex, Text } from '@aws-amplify/ui-react'
import { IoMdReturnLeft } from 'react-icons/io'
import { useRouter } from 'next/router'

function Tips() {
    
    const {tokens } = useTheme()
    const router = useRouter()

    function Restaurants() {
        return (
            <Card width='90vw' backgroundColor={tokens.colors.neutral[20]}>
                <Flex alignContent='center' direction='column' alignItems='center'>
                <Heading level={5}>Our Restaurant Suggestions</Heading>
                        <Text>South Fork</Text>
                        <Text>Aji Sushi Restaurant</Text>
                        <Text>Ahaar Indian cuisine</Text>
                        <Text>SnoThai Thai food</Text>
                        <Text>MOD Pizza for gluten free options</Text>
                        <Text>North Bend Bar and Grill</Text>
                        <Text>Unphogettable</Text>
                        <Text>Breweries: Volition and No Boat</Text>
                </Flex>
            </Card>
        )
    }

    function Snoqualmie() {
        return (

            <Card width='90vw' backgroundColor={tokens.colors.neutral[20]}>
                <Flex alignContent='center' direction='column' alignItems='center'>

                <Heading level={5}>In Our Snoqualmie Valley</Heading>
                    <Text>Visit the Snoqualmie Falls</Text>
                    <Text>Board game restaurant</Text>
                    <Text>Indoor Climbing at </Text>
                    <Text>Alpaka Farm</Text>
                    <Text>Wallaby Farm</Text>
                    <Text>Attend Trivia Nights / Pub Quiz</Text>
                    <Text>Board game restaurant</Text>
                </Flex>
            </Card>
        )
    }

    function DayTrips() {
        return (
            <>
            <Card width='90vw' backgroundColor={tokens.colors.neutral[20]}>
                <Flex alignContent='center' direction='column' alignItems='center'>

                <Heading level={5}>Day Trips</Heading>
                    <Text>Visit the Snoqualmie Falls</Text>
                    <Text>Board game restaurant</Text>
                    <Text>Indoor Climbing at </Text>
                    <Text>Alpaka Farm</Text>
                    <Text>Wallaby Farm</Text>
                    <Text>Attend Trivia Nights / Pub Quiz</Text>
                    <Text>Board game restaurant</Text>
                </Flex>
            </Card>

            </>
        )
    }

    function Hiking() {
        return (
            <>
            <Card width='90vw' backgroundColor={tokens.colors.neutral[20]}>
                <Flex alignContent='center' direction='column' alignItems='center'>
                <Heading level={5}>Hiking</Heading>
                    <Text>Rattlesnake Ledge</Text>    
                    <Text>Little Mount Si</Text>    
                    <Text>Rachel Lake</Text>
                    <Text>Franklin Falls</Text>
                    <Text>Kendall Catwalk</Text>
                                    
                </Flex>
            </Card>
            </>
        )
    }

    return (
        <>
            <Flex direction='column' justifyContent='center' alignItems='center' padding='3rem'>
                    <Button borderRadius={tokens.radii.xl} variation='primary' size='small' onClick={() => router.push('/')} ><Icon viewBox={{width: 550, height: 550}} as={IoMdReturnLeft} ariaLabel='Return button'/></Button>
                    
                    <Heading level={4} paddingTop='2rem'>Our Tips for You</Heading>
                    
                    <Restaurants />
                    
                    <Snoqualmie />    
                    
                    <Hiking />
                    
                    <DayTrips />
            </Flex>
        </>
    )
}

export default Tips