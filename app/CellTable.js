
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Table, TableWrapper } from 'react-native-table-component';
import { HEADER, DESCRIPTIVE_ROW, QUESTION_ROW, LONG_ANSWER, SINGLE_SELECTION, DEFAULT } from './Constants';
import { CellHook } from './CellHook';
import { InputFiled } from './Fields';
import { removeRow, addRow, changeColumnCount } from './TableHandler';

const sampleDataSet = [
    {
        rowId: 1,
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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


const columnWidthsTemplate = {
    firstColumn: 50,
    otherColumns: 40,
    mergedColumns: 80,
    fullColumn: 130
};

const CellTable = () => {
    const [number, onChangeNumber] = React.useState('');
    const [rowType, onchangeInsertRowType] = React.useState(1);
    const [questionType, onchangeInsertquestionType] = React.useState(1);
    const [columnCount, onChangeColumnCount] = React.useState(3);
    const [tableData, onChangeTableData] = React.useState(sampleDataSet);
    const [columnWidths, setColumnWidths] = React.useState(columnWidthsTemplate);
    
    const onchangeRemoveRowIndex = (number) => {
        onChangeNumber(number);
        const updatedDataset = removeRow(Object.assign([], tableData),number);
        onChangeTableData(updatedDataset);
        onChangeNumber(null);
    }

    const onAddRowAbove = (number) => {
        if(!number || number.trim() === '' ) return;
        const updatedDataset = addRow( Object.assign([], tableData),parseInt(number), rowType,columnCount, false);
        onChangeTableData(Object.assign([], updatedDataset));
    }

    const onAddRowBelow = (number) => {
        if(!number || number.trim() === '' ) return;
        const updatedDataset = addRow(Object.assign([], tableData),parseInt(number), rowType,columnCount, true);
        onChangeTableData(Object.assign([], updatedDataset));
    }

    const changeColumns = (add) => {
console.log('object');
        let columnCountCopy  = columnCount;

        if(add){
            columnCountCopy = columnCount + 1;
        }else if(!add && columnCount > 3) {
            columnCountCopy = columnCount - 1;
        }
        onChangeColumnCount(columnCountCopy);
        const updatedDataset =  changeColumnCount(tableData, add, columnCountCopy);
        onChangeTableData(Object.assign([], updatedDataset));
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.paddingTop}>
          <TouchableOpacity onPress={() => changeColumns(true)} >
              <View style={styles.btn}>
                  <Text style={styles.btnText}>insert column</Text>
              </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeColumns(false) } >
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