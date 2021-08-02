import React from "react";

import Text from '../Text/Text';
import { 
    ButtonContainer
} from './styles';
import * as ACTIONS from '../../types';


const Button = ({
    text,
    onPress,
    enableButton = true
} : ACTIONS.ButtonInterface) => {
    return (
        <ButtonContainer
            onPress={onPress}
            disabled={!enableButton}
        >
            <Text
                fontWeight={300}
                fontSize={'15px'}
                color={'white'}
            >
                { text }
            </Text>
        </ButtonContainer>
    );
}

export default Button;