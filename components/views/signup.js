import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';


import styles from './style_signup';
function SignUp() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    {/*header */}
                    <View style={styles.Header}>
                        <Text style={styles.loginText}>Sign Up</Text>
                    </View>
                    {/*body */}
                    <View style={styles.body}>
                        {/*dong1 */}
                        <View>
                          
                        </View>
                        <View style={styles.inputAC}>
                            <View style={styles.input2}>
                                <TextInput style={{alignItems:'center', justifyContent:'center'}}
                                    placeholder={'User name'}>


                                </TextInput>

                            </View>
                        </View>
                        {/*dong 2 */}
                        <View style={{
                            marginTop: 5
                        }}>
                      
                        </View>
                        <View style={styles.inputpw}>
                            <View style={styles.input2}>
                                <TextInput style={{}}
                                    placeholder={'Email'}>

                        
                                </TextInput>
                                
                                

                            </View>

                        </View>
                      {/*dong 3 */}
                      <View style={{
                            marginTop: 5
                        }}>
                      
                        </View>
                        <View style={styles.inputpw}>
                            <View style={styles.input2}>
                                <TextInput style={{}}
                                    placeholder={'Phone number'}>

                        
                                </TextInput>
                                
                            </View>

                        </View>
                          {/*dong 4 */}
                      <View style={{
                            marginTop: 5
                        }}>
                      
                        </View>
                        <View style={styles.inputpw}>
                            <View style={styles.input2}>
                                <TextInput style={{}}
                                    placeholder={'Address'}>

                        
                                </TextInput>
                                
                            </View>

                        </View>
                          {/*dong 5 */}
                      <View style={{
                            marginTop: 5
                        }}>
                      
                        </View>
                        <View style={styles.inputpw}>
                            <View style={styles.input2}>
                                <TextInput style={{}}
                                    placeholder={'Password'}>

                        
                                </TextInput>
                                
                            </View>

                        </View>
                      


                        {/*login button */}
                        <View style={{
                            marginTop: 20,
                        }}
                        >
                            <Button
                               color="#4475eb"
                                title="Login" />
                        </View>
                        {/*---------------------------------------------- */}
                        <View style={{
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection:'row',
                        }}>
                            <Text>Already have an account?</Text>
                            <Text style={{color:'blue'}}> Login now</Text>
                        </View>
                        <View style={{
                            marginTop: 5,
                           
                        }}
                        >
                            
                            <Button

                                color="red"
                                title="Or Login With Google" 
                                />
                                 
                            
                        </View>
                       

                    </View>
                    
                
                    
                </View>
            </View>

        </View>
    );
}


 

  export default SignUp;