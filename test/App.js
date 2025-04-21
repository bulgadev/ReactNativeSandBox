import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import * as Device from 'expo-device';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Notifications from 'expo-notifications';



export default function App() {

  //use effect is to run something on the start of thecode
  React.useEffect(() => {
    //asks for notficiation premission
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission for notifications is not granted!');
      }
    };
    requestPermissions();
  }, []);

  const android = Device.osVersion;
  const user = Device.deviceName;

  //var to hold the massage
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const showMessage = () => {
    setMessage(android);
  }
  const showName = () => {
	setName(user);
  }
  React.useEffect(() => {
    showName();
  }, []);
 
  //a thing to send a post to a api
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

  //Config our notification
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  })

  //a cool function to send a notification
  function improud() {
    //call the notification
    
    Notifications.scheduleNotificationAsync({
    content: {
      title: 'dad',
      body: "Im proud of u son🫡",
    },
    trigger: null,
    })
    console.log('Im proud')
  };

  return (
    <View style={styles.container}>
      <Text>U r gay</Text>
      <Text>{name}</Text>
      <TouchableHighlight
      style={styles.buttonSHOW}
      >
      <Button
        style={styles.buttonSHOW}
        title="Show Android and model"
        onPress={showMessage}
      />
      </TouchableHighlight>
      <TouchableHighlight
      style={styles.buttonSHOW}
      >
     <Button
        style={styles.buttonSHOW}
        title="Dad? is that you?"
        onPress={improud}
      />
 

      </TouchableHighlight>
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
    padding: '4',
    margin: '6',
    gap: '15',
  },
});
