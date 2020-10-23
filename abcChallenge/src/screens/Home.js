import React from 'react'
import { Container, Text, Tab, Tabs, TabHeading, Icon } from 'native-base';

import MovieListScreen from './MovieListScreen'
import SearchScreen from './SearchScreen'

const Home = (props) => {
    return (
        <Container>
            <Tabs
                locked
                tabBarPosition='bottom'>
                <Tab heading={<TabHeading><Icon name="md-home-outline" /><Text>Home</Text></TabHeading>}>
                    <MovieListScreen />
                </Tab>
                <Tab heading={<TabHeading><Icon name="md-search" /><Text>Search</Text></TabHeading>}>
                    <SearchScreen />
                </Tab>
            </Tabs>
        </Container>
    )
}
export default Home;

