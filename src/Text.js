import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Tampilan = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, my name is "PUDIDI"</Text>
      <Text style={styles.text}> I am studying at UIR (Universitas Islam Riau)."</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Latar belakang abu-abu terang
  },
  text: {
    fontSize: 16,
    color: 'darkblue', // Warna teks
    fontWeight: 'bold', // Teks tebal~
  },
});

export default Tampilan;
