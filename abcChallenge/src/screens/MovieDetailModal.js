import React from 'react'
import { View, Text, Button, Modal, TouchableNativeFeedback,StyleSheet } from 'react-native'
import { Icon } from 'native-base'

const MovieDetailModal = ({ showDetail, onRequestClose, selectedMovie }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={showDetail}
            onRequestClose={() => onRequestClose()}
        >
            <View style={modalStyles.container}>
                <TouchableNativeFeedback onPress={() => onRequestClose()} >
                    <Icon name='md-close' style={{ color: 'white', alignSelf: 'flex-end', margin: 10 }} />
                </TouchableNativeFeedback>
                <View style={modalStyles.insideContainer}>
                    <Text>{selectedMovie.title}</Text>
                </View>
            </View>
        </Modal>
    )
}
export default MovieDetailModal;

const modalStyles = StyleSheet.create({

    container: {
        flex: 1, flexDirection: 'column', justifyContent: 'flex-start',
         alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    insideContainer: {
        width: '90%',
        // height: '80%',
        backgroundColor: 'white',
        borderRadius: 14,
        padding: 5,
        justifyContent: 'space-around', alignItems: 'center'
    },
})
