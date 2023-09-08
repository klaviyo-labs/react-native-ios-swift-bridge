import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  NativeModules,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const { KlaviyoManager } = NativeModules;

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
      critical: true,
    })
      .then((data) => {
        console.log('PushNotificationIOS.requestPermissions', data);
      })
      .catch((data) => {
        console.log('PushNotificationIOS.requestPermissions failed', data);
      });

    PushNotificationIOS.addEventListener(type, () => { });
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  }, []);

  const handleSubmit = () => {
    KlaviyoManager.setupProfile(email, firstName, lastName);
    setMessage("Profile information sent. Please allow a minute or so for it to update in the UI.");
    setTimeout(() => {
      setMessage(null);
    }, 6000);
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>
        <Image 
          source={{ uri: 'https://logos-world.net/wp-content/uploads/2022/06/Klaviyo-Logo.png' }}
          style={{ width: 200, height: 80, alignSelf: 'center', marginVertical: 20 }}
        />
        <Text style={styles.headline}>Add Profile Info</Text>
        <Text style={styles.subheadline}>Add user data in the form below to pair the device token profile we captured a second ago, with a known user's profile.</Text>
        <View style={{ height: 30 }} />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          returnKeyLabel="next"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          returnKeyLabel="next"
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          returnKeyLabel="next"
          onChangeText={setLastName}
        />
        {message && (
          <Text style={{ color: 'green', marginTop: 20, textAlign: 'center' }}>
            {message}
          </Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  input: {
    padding: 15,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  subheadline: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default App;
