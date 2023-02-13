
import React, { useRef, createRef, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Table, TableWrapper } from 'react-native-table-component';
import { 
    QUESTION_ROW,
    HEADER,
    DEFAULT, 
    dataRows,
    dataColumns, 
    sampleDataSet, 
    columnWidthsTemplate } from './Constants';
import { CellHook } from './CellHook';
import { removeRow, addRow, changeColumnCount, calculateColumnWidths } from './TableHandler';
import SelectDropdown from 'react-native-select-dropdown';


const CellTable = () => {
    const windowWidth = Dimensions.get('window').width;

    const [number, onChangeNumber] = useState(null);
    const [columnCount, onChangeColumnCount] = useState(3);
    const [tableData, onChangeTableData] = useState(sampleDataSet);
    const [columnWidths, setColumnWidths] = useState(columnWidthsTemplate);
    const [topH, setTop] = useState(0);
    const [selectedRowType, setSelectedRowType] = useState(HEADER);
    const [selectedColumType, setSelectedColumnType] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const elementsRef = useRef(tableData.map(() => createRef()));

    

    useEffect(() => {
        const newWidths = calculateColumnWidths(columnWidths, windowWidth, columnCount);
        setColumnWidths(newWidths);
    }, [0]);

    useEffect(() => {
        const newWidths = calculateColumnWidths(columnWidths, windowWidth, columnCount);
        setColumnWidths(newWidths);
    }, [columnCount]);

    const onchangeRemoveRowIndex = (number) => {
        const updatedDataset = removeRow(Object.assign([], tableData), number);
        onChangeTableData(updatedDataset);
        setShowPopup(false);
        onChangeNumber(null);
    }

    const onAddRow = (number, below = false) => {
        if (!number) return;
        const updatedDataset = addRow(Object.assign([], tableData), number, selectedRowType, selectedColumType, columnCount, below);
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

    const onCardPress = (newRef, rowIndex) => {
        onChangeNumber(rowIndex + 1);
        console.log(number);

        setShowPopup(true);
        newRef?.current?.measureInWindow((fx, fy, width, height, px, py) => {
            setTop(fy + 55)
        })
    }

    const Popup = () => {
        if (topH === 0) {
            return null
        }
        return (
            <View style={{ backgroundColor: 'yellow', position: 'absolute', zIndex: 3, height: 100, width: 430, top: topH}} >
                <View style={[styles.paddingTop,{flexDirection:'row'}]}>
                    <View>
                    <TouchableOpacity onPress={() => changeColumns(true)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Insert column</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => changeColumns(false)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Remove column</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onchangeRemoveRowIndex(number)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Remove Row</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onAddRow(number)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Add Row Above</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onAddRow(number, true)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Add Row Bellow</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowPopup(false)} >
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Colose popup</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
                    

                    <View style={{flexDirection:'row'}}>
                    <SelectDropdown
                        buttonStyle={styles.selectDroDown}
                        buttonTextStyle={{ fontSize: 8 }}
                        onSelect={(val) => setSelectedRowType(val)}
                        data={dataRows}
                    />
                    {
                        selectedRowType === QUESTION_ROW ? (
                        <SelectDropdown
                        buttonTextStyle={{ fontSize: 8 }}
                        buttonStyle={styles.selectDroDown}
                        onSelect={(val) => setSelectedColumnType(val)}
                        data={dataColumns}
                        />
                        ) : null
                    }
                    
                    </View>

                    

                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                {
                    tableData.map((rowData, rowId) => {
                        return (

                            <TableWrapper key={rowId} style={styles.row} onPress={() => test(false)}>

                                {
                                    rowData.columns.map((cellData) => {
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
            {
                showPopup? (<Popup />) : null
            }
            
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
        height: 80 
    }
});
