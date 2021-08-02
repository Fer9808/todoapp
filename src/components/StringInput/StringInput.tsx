import React from "react";

import Text from '../Text/Text';
import { 
    Container,
    TextInput
} from './styles';
import * as ACTIONS from '../../types';


const StringInput = ({
    label,
    value,
    onChangeText
} : ACTIONS.StringInputInterface) => {
    return (
        <Container>
            <Text
                fontWeight={700}
                fontSize={'15px'}
            >
               { label } 
            </Text>
            <TextInput 
                allowFontScaling={false}
                onChangeText={onChangeText}
                value={value}
            />
        </Container>
    );
}

export default StringInput;