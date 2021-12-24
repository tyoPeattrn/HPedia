import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Item,
} from 'react-native'
import axios from 'axios'

const App = () => {
  const [document, setDocument] = useState([])
  useEffect(() => {
    axios.get(
      'https://api.publicapis.org/entries'
    )
      .then(res => {
        // console.log('reponse ==> ', res.data.entries);
        setDocument(res.data.entries.slice(0, 20))
        console.log('fetching success')
      })
      .catch(err => {
        console.log('error ==> ', err);
      })
  }, [])
  // console.log('document => ', document)
  return (
    <View style={{ backgroundColor: 'white' }}>
      <LinearGradient 
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#ad1005', '#ff1100']}
        style={styles.Header}>
        <Text style={styles.Headertxt}>Halal Pedia</Text>
      </LinearGradient>
      <FlatList
        data={document}
        // numbColumns={1}
        renderItem={({ item }) => {
          // console.log('data => ', item);
          return (
            <View style={styles.Container}>
              <Text style={styles.API}>{item.API}</Text>
              <Text style={styles.Description}>{item.Description}</Text>
              <Text style={styles.Category}>{item.Category}</Text>
            </View>
          );
        }}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  Header: {
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  Headertxt: {
    fontFamily: 'Pushster-Regular',
    fontSize: 50,
    color: 'white',
  },
  Container: {
    margin: 20,
    backgroundColor: 'white',
  },
  API: {
    fontSize: 40,
    paddingLeft: 20,
    fontFamily: 'Pushster-Regular',
    color: '#ad1005',
    borderWidth: 2,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#ad1005',
  },
  Description: {
    fontSize: 20,
  },
})