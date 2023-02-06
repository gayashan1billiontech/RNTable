/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { InputFiled } from './Fields';
import CellTable from './CellTable';


const App = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <>
      <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => {}} >
              <View style={styles.btn}>
                  <Text style={styles.btnText}>insert column</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} >
              <View style={styles.btn}>
                  <Text style={styles.btnText}>Remove column</Text>
              </View>
          </TouchableOpacity>
      </View>
      <View>
          <Text>insert row above</Text><InputFiled onChangeNumber={onChangeNumber} number={number} placeholder="insert row above" keyboardType="numeric" styles={styles.input} />
          <Text>insert row below</Text><InputFiled onChangeNumber={onChangeNumber} number={number} placeholder="insert row below" keyboardType="numeric" styles={styles.input} />
      </View>
      <View>
          <Text>remove row</Text><InputFiled onChangeNumber={onChangeNumber} number={number} placeholder="remove row" keyboardType="numeric" styles={styles.input} />
      </View>
      
      <CellTable />
    </>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btn: { width: 200, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  paddingTop: {paddingTop: 30, paddingBottom: 30},
  btnText: { textAlign: 'center' }
});

export default App;