import React, { useEffect, useState } from 'react'
import { View, Text, Button, ActivityIndicator } from 'react-native'
import MovieDetailModal from './MovieDetailModal'
import Http from '../tools/HttpService'

const MovieListScreen = (props) => {
    const [showDetail, setDetailVisibility] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <View>
            <Text onPress={() => setDetailVisibility(true)}>list screen</Text>
            <MovieDetailModal
                showDetail={showDetail}
                onRequestClose={() => setDetailVisibility(false)}
                selectedMovie='mulan'
            />
            {loading ? <ActivityIndicator color='blue'/> : <View>
                <Text>custom list comes here</Text>
            </View>}
        </View>
    )


    function getMovies() {
        setLoading(true)
        Http.httpGetJwt(`movies`).then(res => {
            if (res.status == 200) {
                console.log('___ get movies res ___', res.data.movies)
                setLoading(false)
            }
        }).catch(err => {
            console.log('___ get movies err ___', err)
            setLoading(false)
        })
    }
}
export default MovieListScreen;
