/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';

const TableOne = () => {
    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={['Head', 'Head2', 'Head3', 'Head4']} widthArr={[150, 40, 40, 40, 40]} />
                <Rows data={[
                    ['1', '2', '3asdsadasdasdasdasdsadasdsad', '4'],
                    ['a', 'b', 'c', 'd'],
                    ['1', '2', '3', '456\n789'],
                    ['a', 'b', 'c', 'd']
                ]} widthArr={[150, 40, 40, 40, 40]} />
                <Row data={['Head', 'Head2']} widthArr={[150, 120]} />
                <Rows data={[['1']]} widthArr={[270]} />
            </Table>
        </View>
    );
};

export default TableOne;

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    title: { height: 40, flex: 1, backgroundColor: '#f6f8fa' },
    wrapper: { flexDirection: 'row' },
    row: { height: 28 },
    w: { width: 350 },
    ww: { width: 350 }
});