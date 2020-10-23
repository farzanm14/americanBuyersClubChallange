import React from 'react'
import { View, Text, Image, Modal, TouchableNativeFeedback, ImageBackground } from 'react-native'
import { Icon } from 'native-base'
import detailModalStyles from '../styles/detailModalStyles'

const MovieDetailModal = ({ showDetail, onRequestClose, selectedMovie }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={showDetail}
            onRequestClose={() => onRequestClose()}
        >
            <View style={detailModalStyles.container}>
                <TouchableNativeFeedback onPress={() => onRequestClose()}>
                    <Icon name='md-close' style={{ color: 'white', alignSelf: 'flex-end', margin: 10 }} />
                </TouchableNativeFeedback>
                <View style={detailModalStyles.insideContainer}>
                    <ImageBackground style={detailModalStyles.backdropStyle} source={{ uri: selectedMovie.backdrop }}>
                        <View style={detailModalStyles.headerContainer}>
                            <Image
                                resizeMode="contain"
                                style={detailModalStyles.itemPoster}
                                source={{ uri: selectedMovie.poster }}
                            />
                            <View style={detailModalStyles.titleRatingContainer}>
                                <Text style={detailModalStyles.titleText}>{selectedMovie.title}</Text>
                                <Text>({"imdb " + selectedMovie.imdb_rating})</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={detailModalStyles.secondRowDetailContainer}>
                        <Text style={detailModalStyles.otherText}>Directed by: {selectedMovie.director} | {selectedMovie.length}</Text>
                        <View style={detailModalStyles.castContainer}>
                            <Text>Cast: </Text>
                            {selectedMovie.cast.map((item, index) => { return (<Text>{item}{index + 1 >= selectedMovie.cast.length ? " " : ', '}</Text>) })}
                        </View>
                        <View style={detailModalStyles.castContainer}>
                            <Text>Overview: {selectedMovie.overview}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default MovieDetailModal;