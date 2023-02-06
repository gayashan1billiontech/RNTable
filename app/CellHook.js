import React from 'react';
import { StyleSheet } from 'react-native';
import { Cell } from 'react-native-table-component';
import CellInputComponent from './CellInputComponent';
import {
    SINGLE_SELECTION,
    LONG_ANSWER,
    DEFAULT,
    DESCRIPTIVE_ROW,
    DESCRIPTIVE_ROW_PLACEHOLDER,
    TYPE_HEADER_HERE,
    HEADER_PLACEHOLDER,
    QUESTION_PLACEHOLDER,
    VALUE_PLACEHOLDER,
    TYPE_QUESTION_HERE
} from './Constants';

const element = (placeholder) => (
    <CellInputComponent placeholder={placeholder} />
);


const defaultCell = (cellData, rowIndex, cellIndex, width, placeholder) => (
    <Cell key={`${rowIndex}_${cellIndex}`} style={{ width: width }} data={cellData.columnText || element(placeholder)} textStyle={styles.text} />
);

export const CellHook = {
    [DEFAULT]: (rowType, cellData, rowIndex, cellIndex, columnWidths) => {

        const width = [DESCRIPTIVE_ROW].includes(rowType) ? columnWidths.fullColumn : cellIndex === 1 ? columnWidths.firstColumn : columnWidths.otherColumns;
        const placeholder = [DESCRIPTIVE_ROW].includes(rowType) ? DESCRIPTIVE_ROW_PLACEHOLDER : cellIndex === 1 ? TYPE_HEADER_HERE : HEADER_PLACEHOLDER;

        return defaultCell(cellData, rowIndex, cellIndex, width, placeholder);
    },
    [SINGLE_SELECTION]: (rowType, cellData, rowIndex, cellIndex, columnWidths) => {

        const width = cellIndex === 1 ? columnWidths.firstColumn : columnWidths.otherColumns;
        const placeholder = cellIndex === 1 ? `${QUESTION_PLACEHOLDER} ${rowIndex}` : `${VALUE_PLACEHOLDER} ${cellIndex - 1}`;

        return defaultCell(cellData, rowIndex, cellIndex, width, placeholder);
    },
    [LONG_ANSWER]: (rowType, cellData, rowIndex, cellIndex, columnWidths) => {

        const width = cellIndex === 1 ? columnWidths.firstColumn : columnWidths.mergedColumns;
        const placeholder = cellIndex === 1 ? TYPE_QUESTION_HERE : null;

        return defaultCell(cellData, rowIndex, cellIndex, width, placeholder);
    }
};

const styles = StyleSheet.create({
    text: { margin: 6 }
});