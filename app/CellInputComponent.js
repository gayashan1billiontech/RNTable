
import React from 'react';
import { InputFiled } from './Fields';

const CellInputComponent = (props) => {


    return (
        <InputFiled
            placeholder={props.placeholder}
            keyboardType={'default'} />
    )

}

export default CellInputComponent;
