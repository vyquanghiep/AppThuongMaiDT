import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor: '#4475EB',
    
    },
    container2: {
      backgroundColor:'white',
                      margin: 10,
                      flex: 1,
                      borderRadius: 10,
    },
    container3: {
      flex: 1,
      marginVertical: 20,
    },
    Header: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginText :{
      fontSize: 30,
      fontWeight: 'bold',
      color:'black',
    },
    body: { 
      flex:6,
      margin: 30},
  
    inputAC:{ marginTop:10,
      flexDirection:'row',
      borderColor: 'grey',
      borderWidth:1,
      borderRadius: 10},
  
    inputpw: {marginTop:10,
      flexDirection:'row',
      borderColor: 'grey',
      borderWidth:1,
      borderRadius: 10},
    
    footer: {
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input2: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20
    }
  
    
    
  });

  export default styles;