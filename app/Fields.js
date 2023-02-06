import React from 'react';
import { SafeAreaView, TouchableOpacity, TextInput, Text } from 'react-native';

const InputFiled = (props) => {
console.log('props',props);
    return (
        <SafeAreaView>
            <TextInput
                style={props.styles}
                onChangeText={props.onChangeNumber}
                value={props.number}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
            />
        </SafeAreaView>
    );
};

const TextViewer = (props) => {

    return (
        <Text>
            {props.text}
        </Text>
    );
};

const ClickableCell = (props) => {

    return (
        <TouchableOpacity onPress={() => props.onPress(props)}>
            {props.text}
        </TouchableOpacity>
    );
};


export {
    InputFiled,
    TextViewer,
};
