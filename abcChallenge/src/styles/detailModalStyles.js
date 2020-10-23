import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', justifyContent: 'flex-start',
        alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    insideContainer: {
        width: wp('90%'),
        height:hp('80%'),
        backgroundColor: 'white',
        borderRadius: 14,
        justifyContent: 'flex-start', alignItems: 'flex-start'
    },
    backdropStyle: {
        resizeMode: 'contain',
        // flex:1,
        width: wp('90%'),
        // width:'100%',
        height: hp('30%'),
        padding: wp('2%'),
        borderRadius: 14,
        zIndex: 1
    },
    headerContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        marginTop: hp('20%'),
        zIndex: 3
    },
    itemPoster: {
        width: wp('20%'), height: wp('30%'), marginHorizontal: wp('2%'), borderRadius: wp('4%'),
    },
    titleRatingContainer: {
        height: wp('30%'),
        justifyContent: 'space-around',
        paddingVertical: hp('1%'),

    },
    titleText: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        borderRadius: 5,
        paddingHorizontal: wp('5%'),
        paddingVertical: wp('1%'),
    },
    secondRowDetailContainer: {
        marginTop: hp('7%'),
        padding: wp('3%'),
        justifyContent: 'flex-start',
        alignItems:'flex-start'
    },
    otherText: {
        color: 'black',
    },
    castContainer:{
        flexDirection:'row',
        marginVertical:hp('1%')
    }
});
