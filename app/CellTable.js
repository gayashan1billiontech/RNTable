
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper } from 'react-native-table-component';
import { HEADER, DESCRIPTIVE_ROW, QUESTION_ROW, LONG_ANSWER, SINGLE_SELECTION, DEFAULT } from './Constants';
import { CellHook } from './CellHook';


const CellTable = () => {

    const sampleDataSet = [
        {
            rowId: 0,
            rowType: HEADER,
            questionSelectionType: null,
            columns: [
                {
                    columnId: 1,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null
                },
                {
                    columnId: 2,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
                {
                    columnId: 3,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
            ]
        },
        {
            rowId: 2,
            rowType: DESCRIPTIVE_ROW,
            questionSelectionType: null,
            columns: [
                {
                    columnId: 1,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                }
            ]
        },
        {
            rowId: 3,
            rowType: QUESTION_ROW,
            questionSelectionType: LONG_ANSWER,
            columns: [
                {
                    columnId: 1,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
                {
                    columnId: 2,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                }
            ]
        },
        {
            rowId: 4,
            rowType: QUESTION_ROW,
            questionSelectionType: SINGLE_SELECTION,
            columns: [
                {
                    columnId: 1,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
                {
                    columnId: 2,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
                {
                    columnId: 3,
                    clickableColumn: false,
                    columnText: null,
                    selected: false,
                    value: null,
                },
            ]
        }
    ];

    const columnWidths = {
        firstColumn: 120,
        otherColumns: 120,
        mergedColumns: 240,
        fullColumn: 360
    };


    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                {
                    sampleDataSet.map((rowData, rowId) => {
                        return (
                            <TableWrapper key={rowId} style={styles.row}>
                                {
                                    rowData.columns.map((cellData, cellIndex) => {
                                        const columnType = rowData.questionSelectionType || DEFAULT;

                                        const _cell = CellHook && CellHook[columnType] ? CellHook[columnType](rowData.rowType, cellData, rowId, cellData.columnId, columnWidths) : null
                                        return _cell;
                                    })
                                }
                            </TableWrapper>
                        )
                    })
                }
            </Table>
        </View>
    )

}

export default CellTable;

const styles = StyleSheet.create({
    container: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    row: { flexDirection: 'row' }
});