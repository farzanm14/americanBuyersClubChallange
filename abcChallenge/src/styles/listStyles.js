import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    listContainer:{
        marginVertical:hp('2%'),
        justifyContent:'center'
    },
    itemContainer:{
    },
    listTitle:{
        color:'orange',
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:wp('5%')
    },
    itemPoster:{
         width: wp('30%'), height: wp('40%'), marginHorizontal: wp('2%'), borderRadius: wp('4%'), 
    },emptyListText:{
        color:'gray',
        alignSelf:'center',
        flex:1,
        textAlign:'center',
        fontSize:12
    },
    verticalContainer:{
       marginVertical:hp('1%') ,
       flexDirection:'row'
    },
    moreDetailContainer:{
        justifyContent:'space-around',
        padding: wp('2%'),
    }
});
