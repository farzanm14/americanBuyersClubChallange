import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, Button, ActivityIndicator } from 'react-native'
import Http from '../tools/HttpService'
import CustomListComponent from '../components/CustomListComponent'
import movieScreenStyles from '../styles/movieScreenStyles'

const MovieListScreen = (props) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <ScrollView>
            <Text style={movieScreenStyles.headerText} >W o o k i e{'\n'}M o v i e s</Text>
            {loading ? <ActivityIndicator color='gray'/> :
                <View>
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Action') > -1)} listName={'Action'} />
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Adventure') > -1)} listName={'Adventure'} />
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Drama') > -1)} listName={'Drama'} />
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Crime') > -1)} listName={'Crime'} />
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Mystery') > -1)} listName={'Mystery'} />
                    <CustomListComponent list={list.filter(item => item.genres.indexOf('Romance') > -1)} listName={'Romance'} />
                </View>
            }
        </ScrollView>
    )


    function getMovies() {
        setLoading(true)
        Http.httpGetJwt(`movies`).then(res => {
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
export default MovieListScreen;
