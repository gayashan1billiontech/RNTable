/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { InputFiled } from './Fields';
import CellTable from './CellTable';


const App = () => {
  const [number, onChangeNumber] = React.useState('');
  return (
    <>
      <InputFiled onChangeNumber={onChangeNumber} number={number} placeholder="useless placeholder" keyboardType="numeric" style={styles.input} />
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
});

export default App;