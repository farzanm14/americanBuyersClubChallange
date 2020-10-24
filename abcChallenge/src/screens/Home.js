import React from 'react'
import { Container, Text, Tab, Tabs, TabHeading, Icon } from 'native-base';
import { Platform } from 'react-native'
import MovieListScreen from './MovieListScreen'
import SearchScreen from './SearchScreen'

const Home = (props) => {
    return (
        <Container style={{ paddingTop: Platform.OS == 'ios' ? 35 : 0 ,paddingBottom: Platform.OS == 'ios' ? 15 : 0 ,}}>
            <Tabs
                locked
                tabBarPosition='bottom'>
                <Tab heading={<TabHeading><Icon name="home" ios="ios-home" android="md-home"  /><Text>Home</Text></TabHeading>}>
                    <MovieListScreen />
                </Tab>
                <Tab heading={<TabHeading><Icon name="search" ios="ios-search" android="md-search"  /><Text>Search</Text></TabHeading>}>
                    <SearchScreen />
                </Tab>
            </Tabs>
        </Container>
    )
}
export default Home;

