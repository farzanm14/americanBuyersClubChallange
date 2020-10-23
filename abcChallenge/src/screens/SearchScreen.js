import React, { useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Item, Icon, Input, Container } from 'native-base'
import searchScreenStyles from '../styles/searchScreenStyles'
import Http from '../tools/HttpService'
import CustomListComponent from '../components/CustomListComponent'

const SearchScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchText, setText] = useState('');
    const [list, setList] = useState([]);

    return (
        <Container style={searchScreenStyles.mainContainer}>
            <View style={searchScreenStyles.headerContainer}>
                <Item rounded bordered style={searchScreenStyles.headerItem}>
                    <Input placeholder="enter movie's name ... "
                        style={[searchScreenStyles.searchInputStyle]}
                        value={searchText}
                        onChangeText={(searchText) => setText(searchText)}
                    />
                    <Icon name="ios-search" onPress={() => searchInMovies()} />
                </Item>
            </View>
            {loading ? <ActivityIndicator color='orange' /> :
                <CustomListComponent isVertical={true} list={list} listName={''} />
            }
        </Container>
    )
    function searchInMovies() {
        setLoading(true)
        Http.httpGetJwt(`movies?q=${searchText}`).then(res => {
            if (res.status == 200) {
                // console.log('___ get movies res ___', res.data.movies)
                setList(res.data.movies)
                setLoading(false)
            }
        }).catch(err => {
            // console.log('___ get movies err ___', err)
            setLoading(false)
        })
    }
}
export default SearchScreen;
