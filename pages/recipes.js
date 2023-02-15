import {  useTheme, Card, Heading, Icon, Button, Flex, Text } from '@aws-amplify/ui-react'
import { IoMdReturnLeft } from 'react-icons/io'
import { useRouter } from 'next/router'

function Tips() {
    
    const {tokens } = useTheme()
    const router = useRouter()

    function Recipes() {
        return (
            <Card width='90vw' backgroundColor={tokens.colors.neutral[20]}>
                <Flex alignContent='center' direction='column' alignItems='center'>
                <Heading level={1}>Recipes</Heading>
                <Text></Text>
                <Text></Text>
                <Card>
                    <Heading level={2}>Tik Tok Pasta Recipe</Heading>
                    <Heading level={3}>Ingredients</Heading>
                    <Text>1 quart cherry or grape tomatoes</Text>
                    <Text>10 ounces feta cheese</Text>
                    <Text>1 pound bite sized linguine pasta</Text>
                    <Text>1 teaspoon dried oregano</Text>
                    <Text>1/8 cup olive oil</Text>
                    <Text>1/4 teaspoon red chili flake or to taste</Text>
                    <Text>Salt to taste</Text>
                    <Text>Black Pepper to taste</Text>
                    <Heading level={3}>Instructions</Heading>
                    <Text>Preheat an oven to 400°F</Text>
                    <Text>Lay out whole cherry tomatoes in a pyrex or earthenware baking pan</Text>
                    <Text>Evenly spread olive oil, salt, pepper, chili flakes and 2/3 of the oregano over the tomatoes.</Text>
                    <Text>Mix the seasonings, olive oil and tomatoes thoroughly and then create a rectangular well in the middle of pan for the feta cheese</Text>
                    <Text>Gently place the feta in the well.</Text>
                    <Text>Sprinkle the remaining oregano on top of the feta and place 3 thyme sprigs on top of the pan</Text>
                    <Text>Place the roasting pan in the middle rack of the oven. Set the oven timer for 25 minutes.</Text>
                    <Text>Bring salted pasta water to a boil on the stove.</Text>
                    <Text>After 25 minutes, drop the pasta into the boiling pasta water. Cook the pasta according to the box instructions.</Text>
                    <Text>Bake the the tomato/feta mixture for an additional 10 minutes until the both the tomatoes and feta are light brown and caramelized (see photo). Once done, remove the mixture from the oven.</Text>
                    <Text>Drain the pasta in a colander, reserving a cup of the pasta water.</Text>
                    <Text>Pour the pasta in the roasting pan and thoroughly mix the pasta with the tomatoes and feta. Gradually pour in the pasta water until the sauce reaches the desired consistency.</Text>
                </Card>
                <Text></Text>
                <Text></Text>
                <Card>
                    <Heading level={2}>Iskiate</Heading>
                    <Heading level={3}>INGREDIENTS</Heading>
                    <Text>2 tbsp chia seeds</Text>
                    <Text>2 cups water</Text>
                    <Text>1 lime (juiced)</Text>
                    <Text>1 tbsp honey (or maple/agave syrup/favourite sweetener. Honey is non-vegan)</Text>
                </Card>
                <Text></Text>
                <Text></Text>
                <Card>
                    <Heading level={2}>Apple Rice Bake Recipe</Heading>
                    <Heading level={3}>Ingredients:</Heading>
                    <Text>4 cups of milk</Text>
                    <Text>1/4 tsp of salt</Text>
                    <Text>1 cup of short grain rice</Text>
                    <Text>4 apples</Text>
                    <Text>1/4 cup of butter</Text>
                    <Text>1/3 cup of honey</Text>
                    <Text>4 eggs</Text>
                    <Text>cinnamon</Text>
                    <Text></Text>
                    <Text></Text>

                    <Heading level={3}>Instructions:</Heading>
                    <Text>Step 1: Fill a pot with a bit of water, and then 4 cups of milk, 1/4 tsp of salt, and 1 cup of short grain rice.</Text>
                    <Text>Boil for roughly 25 minutes.</Text>
                    <Text>Step 2: Start preheating oven to 350 F.</Text>
                    <Text>Step 3: Cut 4 apples or pears into small cubes in while boiling the rice.</Text>
                    <Text>Step 4: Mix following ingredients together: 1/4 cup of butter, 1/3 cup of honey, cinnamon, and 4 eggs and apples.</Text>
                    <Text>Step 5: Fill a tray with the milk rice and the ingredients from step 3. Add butter flakes on top.</Text>
                    <Text>Step 6: Put in oven for 40 minutes, then start broil for 5 minutes.</Text>
                </Card>
                </Flex>
            </Card>
        )
    }

    return (
        <>
            <Flex direction='column' justifyContent='center' alignItems='center' padding='3rem'>
                    <Button borderRadius={tokens.radii.xl} variation='primary' size='small' onClick={() => router.push('/')} ><Icon viewBox={{width: 550, height: 550}} as={IoMdReturnLeft} ariaLabel='Return button'/></Button>
                    <Recipes />
            </Flex>
        </>
    )
}

export default Tips