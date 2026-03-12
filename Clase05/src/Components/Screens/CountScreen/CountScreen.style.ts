import { StyleSheet } from "react-native/";
import {colors, space} from "../../../Themes";

export const stylesCountScreen = StyleSheet.create({
container:{
flex:1,
justifyContent:"center",
padding:20
},

title:{
fontSize:24,
textAlign:"center",
marginBottom:10
},

display:{
fontSize:40,
textAlign:"right",
marginBottom:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:10
},

button:{
flex:1,
backgroundColor:"#ddd",
padding:20,
margin:5,
alignItems:"center",
borderRadius:10
},

buttonText:{
fontSize:24
}


});