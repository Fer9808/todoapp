import React from "react";
import {
    StatusBar, 
} from "react-native";

import * as ACTION from '../../types';
import { useCheckAndroid } from "../../hooks";
import {
    SafeAreaView,
    KeyboardAvoidingView
} from './styles';

const GeneralContainer = ({
    children,
    verticalOffset = 0
} : ACTION.GeneralContianerInterface) => {
    const behavior = useCheckAndroid() ? "height" : "padding";

    return (
        <>
            <StatusBar
                barStyle={ "dark-content" }
                backgroundColor={ '#26C6F5' }
                animated={ true }
            />
            <SafeAreaView>
                <KeyboardAvoidingView 
                    behavior={ behavior } 
                    keyboardVerticalOffset={ verticalOffset } 
                >
                    { children }
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

export default GeneralContainer;