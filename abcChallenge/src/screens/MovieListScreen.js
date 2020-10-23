import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

import MovieDetailModal from './MovieDetailModal'

const MovieListScreen = (props) => {
    const [showDetail, setDetailVisibility] = useState(false);

    return (
        <View>
            <Text onPress={() => setDetailVisibility(true)}>list screen</Text>
            <MovieDetailModal
                showDetail={showDetail}
                onRequestClose={() => setDetailVisibility(false)}
                selectedMovie='mulan'
            />
        </View>
    )
}
export default MovieListScreen;
