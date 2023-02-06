//ROW TYPES
const HEADER = "HEADER";
const QUESTION_ROW = "QUESTION_ROW";
const DESCRIPTIVE_ROW = "DESCRIPTIVE_ROW";

//QUESTION ROW SELECTION TYPES
const SINGLE_SELECTION = "SINGLE_SELECTION";
const LONG_ANSWER = "LONG_ANSWER";
const DEFAULT = "DEFAULT";

//PLACEHOLDERS
const DESCRIPTIVE_ROW_PLACEHOLDER = "Type descriptive row here";
const TYPE_HEADER_HERE = "Type header here";
const HEADER_PLACEHOLDER = "header";
const QUESTION_PLACEHOLDER = "Question";
const VALUE_PLACEHOLDER = "Value";
const TYPE_QUESTION_HERE = "type question here";

const HEADER_ROW_ID = 1;
const DESCRIPTIVE_ROW_ID = 2;
const QUESTION_LONG = 3
const QUESTION_SINGLE = 4;



const DESCRIPTIVE_ROW_TEMPLATE = {
        rowId: null,
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
};

const HEADER_ROW_TEMPLATE = {
    rowId: 1,
    rowType: HEADER,
    questionSelectionType: null,
    columns: [
    ]
};

const COLUMN_TEMPLATE = {
    columnId: null,
    clickableColumn: false,
    columnText: null,
    selected: false,
    value: null
}

const ROW_TYPE_AND_TEMPLATE_MAPING = {
    [HEADER_ROW_ID]: HEADER_ROW_TEMPLATE,
    [DESCRIPTIVE_ROW_ID]: DESCRIPTIVE_ROW_TEMPLATE,
    [QUESTION_LONG]: DESCRIPTIVE_ROW,
    [QUESTION_SINGLE]: DESCRIPTIVE_ROW,
}



export {
    HEADER,
    QUESTION_ROW,
    DESCRIPTIVE_ROW,
    SINGLE_SELECTION,
    LONG_ANSWER,
    DEFAULT,
    DESCRIPTIVE_ROW_PLACEHOLDER,
    TYPE_HEADER_HERE,
    HEADER_PLACEHOLDER,
    QUESTION_PLACEHOLDER,
    VALUE_PLACEHOLDER,
    TYPE_QUESTION_HERE,
    DESCRIPTIVE_ROW_TEMPLATE,
    COLUMN_TEMPLATE,
    HEADER_ROW_TEMPLATE,
    ROW_TYPE_AND_TEMPLATE_MAPING
}