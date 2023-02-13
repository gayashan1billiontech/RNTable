
import React, { useRef, createRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Table, TableWrapper } from 'react-native-table-component';
import { HEADER, DESCRIPTIVE_ROW, QUESTION_ROW, LONG_ANSWER, SINGLE_SELECTION, DEFAULT } from './Constants';
import { CellHook } from './CellHook';
import { InputFiled } from './Fields';
import { removeRow, addRow, changeColumnCount, calculateColumnWidths } from './TableHandler';
import { SelectList } from 'react-native-dropdown-select-list'
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
    const windowWidth = Dimensions.get('window').width;
    const [number, onChangeNumber] = React.useState('');
    const [rowType, onchangeInsertRowType] = React.useState(1);
    const [questionType, onchangeInsertquestionType] = React.useState(1);
    const [columnCount, onChangeColumnCount] = React.useState(3);
    const [tableData, onChangeTableData] = React.useState(sampleDataSet);
    const [columnWidths, setColumnWidths] = React.useState(columnWidthsTemplate);
    const [topH, setTop] = useState(0);

    const elementsRef = useRef(tableData.map(() => createRef()));

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Mobiles' },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers'},
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    React.useEffect(() => {
        const newWidths = calculateColumnWidths(columnWidths, windowWidth, columnCount);
        setColumnWidths(newWidths);
    }, [0]);

    React.useEffect(() => {
        const newWidths = calculateColumnWidths(columnWidths, windowWidth, columnCount);
        setColumnWidths(newWidths);
    }, [columnCount]);

    const onchangeRemoveRowIndex = (number) => {
        onChangeNumber(number);
        const updatedDataset = removeRow(Object.assign([], tableData), number);
        onChangeTableData(updatedDataset);
        onChangeNumber(null);
    }

    const onAddRowAbove = (number) => {
        if (!number || number.trim() === '') return;
        const updatedDataset = addRow(Object.assign([], tableData), parseInt(number), rowType, columnCount, false);
        onChangeTableData(Object.assign([], updatedDataset));
    }

    const onAddRowBelow = (number) => {
        if (!number || number.trim() === '') return;
        const updatedDataset = addRow(Object.assign([], tableData), parseInt(number), rowType, columnCount, true);
        onChangeTableData(Object.assign([], updatedDataset));
    }

    const changeColumns = (add) => {

        let columnCountCopy = columnCount;

        if (add) {
            columnCountCopy = columnCount + 1;
        } else if (add === false && columnCount > 3) {
            columnCountCopy = columnCount - 1;
        }

        onChangeColumnCount(columnCountCopy);
        const updatedDataset = columnCount !== columnCountCopy ? changeColumnCount(tableData, add, columnCountCopy) : tableData;
        onChangeTableData(Object.assign([], updatedDataset));
    }

    const onCardPress = (newRef) => {
        newRef?.current?.measureInWindow((fx, fy, width, height, px, py) => {
            setTop(fy + 55)
        })
    }

    const Popup = () => {
        if (topH === 0) {
            return null
        }
        return (
            <View style={{ backgroundColor: 'yellow', position: 'absolute', zIndex: 3, height: 60, width: 430, top: topH}} >
                <View style={[styles.paddingTop,{flexDirection:'row'}]}>
                    <View>
                    <TouchableOpacity onPress={() => changeColumns(true)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>insert column</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => changeColumns(false)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Remove column</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onchangeRemoveRowIndex(1)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Remove Row</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={{flexDirection:'row'}}>
                    <SelectList
                        boxStyles={styles.selectDroDown}
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                    />

                    <SelectList
                        boxStyles={styles.selectDroDown}
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                    />
                    </View>

                    

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.insertRow}>
                <InputFiled onChangeNumber={onchangeInsertRowType} placeholder="insert row type" keyboardType="numeric" styles={styles.input} />
                <InputFiled onChangeNumber={onchangeInsertquestionType} placeholder="insert question type" keyboardType="numeric" styles={styles.input} />
                <InputFiled onChangeNumber={onAddRowAbove} placeholder="insert row above" keyboardType="numeric" styles={styles.input} />
                <InputFiled onChangeNumber={onAddRowBelow} placeholder="insert row below" keyboardType="numeric" styles={styles.input} />
            </View>

            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                {
                    tableData.map((rowData, rowId) => {
                        return (

                            <TableWrapper key={rowId} style={styles.row} onPress={() => test(false)}>

                                {
                                    rowData.columns.map((cellData, cellIndex) => {
                                        const columnType = rowData.questionSelectionType || DEFAULT;
                                        const ref = elementsRef?.current[rowId];

                                        const _cell = CellHook && CellHook[columnType] ? CellHook[columnType](rowData.rowType, cellData, rowId, cellData.columnId, columnWidths, ref, onCardPress, elementsRef) : null
                                        return _cell;
                                    })
                                }
                            </TableWrapper>
                        )
                    })
                }
            </Table>
            <Popup />
        </View>
    )

}

export default CellTable;

const styles = StyleSheet.create({
    container: { padding: 10, paddingTop: 30, backgroundColor: '#fff' },
    row: { flexDirection: 'row' },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    btn: { width: 150, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
    btnText: { textAlign: 'center' },
    insertRow: { backgroundColor: '#c8e1ff' },
    selectDroDown: {
        backgroundColor: '#e5e5e5', 
        width: 100,
        height: 50 
    }
});
