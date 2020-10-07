import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Heading, Text, Grid, Card, Image, Box, Button, useColorMode } from "theme-ui"

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Layout>
      <SEO title="Home" />
      <Button onClick={(e) => {
        setColorMode(colorMode === 'default' ? 'dark': 'default');
      }}>
        Click me!
      </Button>
      <Container>
        <Heading as="h1">
          Very Good Fruit Store
      </Heading>
        {/* pretty nice media query thing here, mobile,  */}
        <Grid columns={[1, 2, 3]} gap={20}>
          <Card>
            <Heading>Fresh</Heading>
            <Text variant={'text.caps'}>Oh so fresh</Text>
          </Card>
          <Card>
            <Heading>Fresh</Heading>
            <Text>Oh so fresh</Text>
          </Card>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box>
            <Text variant={'caps'}>Some cappital stuff</Text>
          </Box>
          <Box>
            <Image
              alt="Picture of Bill Murray"
              sx={{ backgroundSize: 'contain' }}
              src={'https://www.fillmurray.com/500/600'}
            />
          </Box>
        </Grid>
      </Container>
    </Layout>);
};

export default IndexPage
