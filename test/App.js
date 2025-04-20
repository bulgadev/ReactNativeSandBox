import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import * as Device from 'expo-device';
import { Colors } from 'react-native/Libraries/NewAppScreen';




export default function App() {
  const android = Device.osVersion;

  //var to hold the massage
  const [message, setMessage] = useState('');
  const showMessage = () => {
    setMessage(android);
  }

  function handlePost() {
    const sendData = async () => {
      const dataToSend = {
        "clicked": true,
        "username": "bulga",
      }
      try {
        const res = await axios.post('http://localhost:5000/api/send', dataToSend);
        const result = res.data;
      } catch (error) {
        console.error("Error on post: ", error);
      }

    }
    sendData();
  }


  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Button style={styles.buttonSHOW}
        title="Post"
        onPress={handlePost}
      />
      <Button
      title='Show Android and mmodel'
      onPress={showMessage}
      />
      {message !== '' && <Text>{message}</Text>}	
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonSHOW: {
    backgroundColor: 'red',
  },
});
