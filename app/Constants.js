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

const QUESTION_ROW_LONG_TEMPLATE = {
    rowId: 1,
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
};

const QUESTION_ROW_SINGLE_TEMPLATE = {
    rowId: 1,
    rowType: QUESTION_ROW,
    questionSelectionType: SINGLE_SELECTION,
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
    [HEADER]: HEADER_ROW_TEMPLATE,
    [DESCRIPTIVE_ROW]: DESCRIPTIVE_ROW_TEMPLATE,
    [`${QUESTION_ROW}_${LONG_ANSWER}`]: QUESTION_ROW_LONG_TEMPLATE,
    [`${QUESTION_ROW}_${SINGLE_SELECTION}`]: QUESTION_ROW_SINGLE_TEMPLATE,
}

const dataRows = [HEADER, DESCRIPTIVE_ROW, QUESTION_ROW
]

const dataColumns = [SINGLE_SELECTION, LONG_ANSWER
]

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
    ROW_TYPE_AND_TEMPLATE_MAPING,
    dataRows,
    dataColumns,
    columnWidthsTemplate,
    sampleDataSet
}