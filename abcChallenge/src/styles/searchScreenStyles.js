import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    searchInputStyle: {
        fontSize: 13,
        textAlign: 'left',
    },
    headerContainer:{
        marginHorizontal:wp('3%'),
        marginVertical:hp('1%'),
        alignSelf:'center',
    },
    headerItem:{
        width:'100%'
    },
    mainContainer:{
        // paddingBottom:hp('20%')
    }
});
