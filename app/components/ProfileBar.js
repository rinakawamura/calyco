import React, { useState, useEffect } from 'react';
import { Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { updateUser } from "../../src/graphql/custom_mutations";
import { getloggedInUser } from "../helpers";
import { getUser } from "../../src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";


export default function ProfileBar() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      console.log('END MY SUFFERING');
      const user = await getloggedInUser();
      const user1 = await API.graphql(graphqlOperation(getUser, { id: user.id }));
      console.log(user1)
      await API.graphql(graphqlOperation(updateUser, { id: user.id, image_url: result.uri}))
      const user2 = await API.graphql(graphqlOperation(getUser, { id: user.id }));
      console.log(user2)
    }
  };

  return (
    <>
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      {image ? 
        <Image 
          source={{ uri: image }} 
          style={styles.image} 
          onPress={pickImage}/> : 
        <TouchableOpacity
          style={styles.selected}
          onPress={pickImage}
        >
          <MaterialCommunityIcons name="account" size={50} />
        </TouchableOpacity>
      }

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 125, 
    height: 125,
    borderRadius: 100,
    position: 'absolute',
    top: 5,
    left: 5,
  },
  selected: {
    position: 'absolute',
    top: 15,
    left: 0,
    borderWidth:5,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width: 125,
    height: 125,
    backgroundColor:'#fff',
    borderRadius:100,
  }

});