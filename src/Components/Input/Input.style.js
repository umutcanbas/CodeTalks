import { StyleSheet , Platform } from "react-native";

import colors from "../../Style/color";


export default StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        backgroundColor:colors.orange,
        flexDirection:'row',
        borderColor: colors.white, 
        borderBottomWidth: 5,
    },
    input:{
        flex:1,
        color:colors.white,
        padding: Platform.OS === 'android' ? 0 : 5,
        fontWeight:'bold'
    }
})