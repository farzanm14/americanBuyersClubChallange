import React, { useState } from 'react';
import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import { Text } from 'native-base'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import listStyles from '../styles/listStyles'
import MovieDetailModal from '../screens/MovieDetailModal'


function CustomListComponent({ list, listLoading, listName }) {
    const [showDetail, setDetailVisibility] = useState(false);

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
                    <View //onPress={() => alert('View press')} 
                        style={listStyles.itemContainer} key={index}>
                        <Image
                            resizeMode="contain"
                            key={index}
                            style={listStyles.itemPoster}
                            source={{ uri: item.poster }}
                        />
                    </View>
                )}
            />
             <MovieDetailModal
                showDetail={showDetail}
                onRequestClose={() => setDetailVisibility(false)}
                selectedMovie='mulan'
            />
        </View>
    );
}

export default CustomListComponent;