import React, { useState } from 'react';
import { View, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Text } from 'native-base'
import listStyles from '../styles/listStyles'
import MovieDetailModal from '../screens/MovieDetailModal'


function CustomListComponent({ list, listLoading, listName }) {
    const [showDetail, setDetailVisibility] = useState(false);
    const [selectedItem, setItem] = useState();

    return (
        <View style={listStyles.listContainer}>
            <View><Text style={listStyles.listTitle}>{listName}</Text></View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={list}
                ListEmptyComponent={listLoading ? <ActivityIndicator color='blue' /> : <Text>empty</Text>}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => {
                        setItem(item)
                        setDetailVisibility(true)
                    }}>
                        <View
                            style={listStyles.itemContainer} key={index}>
                            <Image
                                resizeMode="contain"
                                key={index}
                                style={listStyles.itemPoster}
                                source={{ uri: item.poster }}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
            {!selectedItem ? null :
                <MovieDetailModal
                    showDetail={showDetail}
                    onRequestClose={() => setDetailVisibility(false)}
                    selectedMovie={selectedItem}
                />}
        </View>
    );
}

export default CustomListComponent;