import { 
    ROW_TYPE_AND_TEMPLATE_MAPING,
    DESCRIPTIVE_ROW, 
    COLUMN_TEMPLATE, 
    HEADER, 
    QUESTION_ROW,
    SINGLE_SELECTION
} from './Constants';

export const removeRow = (dataset, index) => {

    let filteredData = dataset.filter(a => a.rowId !== parseInt(index) ).map((rowData, i) => {
        if(rowData.rowId > index){
            rowData.rowId = rowData.rowId - 1; 
        }
        return  rowData;
    })

    return filteredData;
}

export const addRow = (dataset, index, rowType, columnCount, below = true) => {
    const newArray = [];
    const conditionalIdex = below ? index: index-1;
    const insertIndex = below ? index + 1 : index;

    for(let rowData of dataset){

        const clonedObject = Object.assign({}, rowData);

        if(clonedObject.rowId < conditionalIdex ){
            newArray.push(clonedObject);
            
        }else if(clonedObject.rowId === conditionalIdex){
            newArray.push(clonedObject);
            const newObject = { ...ROW_TYPE_AND_TEMPLATE_MAPING[rowType]};
            if(newObject.rowType !== DESCRIPTIVE_ROW && newObject.questionSelectionType !== LONG_ANSWER){
                for(let i = 0 ; i < columnCount; i++){
                    newObject.columns.push(COLUMN_TEMPLATE);
                }
            }
            newObject.rowId = insertIndex;
            newArray.push(newObject);
        }else{
            clonedObject.rowId = clonedObject.rowId + 1;
            newArray.push(clonedObject);
        }
    }


    return newArray;
}

export const changeColumnCount = (dataset, add, columnCount) => {
    const newArray = [];
    for(let rowData of dataset){

        if(rowData.rowType === HEADER || (rowData.rowType === QUESTION_ROW && rowData.questionSelectionType === SINGLE_SELECTION)){

            if(add){
             const newColumn = { ...COLUMN_TEMPLATE, columnId: columnCount + 1}; 
             rowData.columns = [ ...rowData.columns, newColumn ]; 
            }else{
                rowData.columns.pop()
            }
           
        }
        newArray.push(rowData)
    }

    return newArray;
}

export const calculateColumnWidths = (columnWidths,windowWidth,columnCount, firstRowTextCheck) => {

    const _columnWidths = {...columnWidths};
    const considerableWidth = Math.round(windowWidth - 20);

    const columnWidth = Math.round(considerableWidth / columnCount + 1);

    const columnWidthRound = Math.round(columnWidth / 10) * 10;
    const fullWidth = columnWidthRound * columnCount;

    _columnWidths.firstColumn = columnWidthRound;
    _columnWidths.otherColumns = columnWidthRound;
    _columnWidths.mergedColumns = fullWidth - columnWidthRound;
    _columnWidths.fullColumn = fullWidth;
    
    return _columnWidths;


}
