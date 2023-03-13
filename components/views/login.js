import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity, Button} from 'react-native';


import styles from './style_login';
function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    {/*header */}
                    <View style={styles.Header}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                    {/*body */}
                    <View style={styles.body}>
                        {/*dong1 */}
                        <View>
                            <Text style={{
                                color: 'black', fontSize: 15
                            }}>Username</Text>
                        </View>
                        <View style={styles.inputAC}>
                            <View style={{
                                flex: 1,
                                padding: 10

                            }}>
                                <TextInput style={{}}
                                    placeholder={'Type your Username'}>


                                </TextInput>

                            </View>
                        </View>
                        {/*dong 2 */}
                        <View style={{
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: 'black', fontSize: 15
                            }}>Password</Text>
                        </View>
                        <View style={styles.inputpw}>
                            <View style={{
                                flex: 1,
                                padding: 10

                            }}>
                                <TextInput style={{}}
                                    placeholder={'Type your password'}>


                                </TextInput>

                            </View>

                        </View>
                        <Text style={{
                            marginLeft: 200,
                            marginTop: 5
                        }}>Fogot password?</Text>


                        {/*login button */}
                        <View style={{
                            marginTop: 10,
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
                        }}>
                            <Text>Or Login Using</Text>
                        </View>
                        <View style={{
                            marginTop: 10,
                        }}
                        >
                            <Button

                                color="red"
                                title="Login With Google" />
                        </View>


                    </View>

                    {/*footer */}
                    <View style={styles.footer}>
                        <Text>Or Sign Up Using</Text>
                        <TouchableOpacity style={{
                            padding: 20,
                        }}>
                            <Text style={{
                                color: 'blue',
                                fontWeight: '500',
                            }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}


 

  export default Login;