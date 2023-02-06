
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Table, TableWrapper } from 'react-native-table-component';
import { HEADER, DESCRIPTIVE_ROW, QUESTION_ROW, LONG_ANSWER, SINGLE_SELECTION, DEFAULT } from './Constants';
import { CellHook } from './CellHook';
import { InputFiled } from './Fields';
import { removeRow, addRow } from './TableHandler';

const sampleDataSet = [
    {
        rowId: 1,
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
const CellTable = () => {
    const [number, onChangeNumber] = React.useState('');
    const [rowType, onchangeInsertRowType] = React.useState(1);
    const [questionType, onchangeInsertquestionType] = React.useState(1);
    const [columnCount, onChangeColumnCount] = React.useState(3);
    const [tableData, onChangeTableData] = React.useState(sampleDataSet);
    

    const columnWidths = {
        firstColumn: 120,
        otherColumns: 120,
        mergedColumns: 240,
        fullColumn: 360
    };

    const onchangeRemoveRowIndex = (number) => {
        onChangeNumber(number);
        const updatedDataset = removeRow(tableData,number);
        onChangeTableData(updatedDataset);
        onChangeNumber(null);
    }

    const onAddRowAbove = (number) => {
        const updatedDataset = addRow(tableData,parseInt(number), rowType,columnCount, false);
        onChangeTableData(updatedDataset);
    }

    const onAddRowBelow = (number) => {
        if(!number || number.trim() === '' ) return;
        const updatedDataset = addRow(tableData,parseInt(number), rowType,columnCount, true);
        onChangeTableData(updatedDataset);
    }
    console.log('tableData',tableData);
    return (
        <View style={styles.container}>
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
      <View style={styles.insertRow}>
            <InputFiled onChangeNumber={onchangeInsertRowType}  placeholder="insert row type" keyboardType="numeric" styles={styles.input} />
            <InputFiled onChangeNumber={onchangeInsertquestionType}  placeholder="insert question type" keyboardType="numeric" styles={styles.input} />
            <InputFiled onChangeNumber={onAddRowAbove} placeholder="insert row above" keyboardType="numeric" styles={styles.input} />
            <InputFiled onChangeNumber={onAddRowBelow}  placeholder="insert row below" keyboardType="numeric" styles={styles.input} />
      </View>
      <View>
            <InputFiled onChangeNumber={onchangeRemoveRowIndex}  placeholder="remove row" keyboardType="numeric" styles={styles.input} />
      </View>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                {
                    tableData.map((rowData, rowId) => {
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
    row: { flexDirection: 'row' },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      btn: { width: 200, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
      paddingTop: {paddingTop: 30, paddingBottom: 30},
      btnText: { textAlign: 'center' },
      insertRow: {backgroundColor: '#c8e1ff' }
});