import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Kotak= () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.leftBox]}>
          <Text style={styles.text}>Kotak 1</Text>
        </View>
        <View style={[styles.box, styles.rightBox]}>
          <Text style={styles.text}>Kotak 2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Warna latar belakang
  },
  boxContainer: {
    flexDirection: 'row', // Menyusun kotak secara horizontal
    justifyContent: 'space-between', // Jarak merata antara kotak
    width: '80%', // Mengatur lebar total container
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center', // Menempatkan teks di tengah secara vertikal
    alignItems: 'center', // Menempatkan teks di tengah secara horizontal
    borderRadius: 10, // Membuat sudut kotak melengkung
    shadowColor: '#000', // Efek bayangan
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4, // Bayangan di Android
  },
  leftBox: {
    backgroundColor: 'lightblue', // Warna kotak 1
  },
  rightBox: {
    backgroundColor: 'lightcoral', // Warna kotak 2
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Kotak;
