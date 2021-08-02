import React from "react";
import {
    TouchableOpacity
} from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    IconContainer
} from './styles'
import Text from '../Text/Text';
import * as ACTIONS from '../../types';


const AddTaskHeader = ({
    onPressAction
} : ACTIONS.AddTaskHeaderInterface) => {
    return (
        <Container>
            <IconContainer>
                <TouchableOpacity
                    //@ts-ignore
                    onPress={onPressAction}
                >
                    <MaterialCommunityIcons name="chevron-left" color={'black'} size={25} />
                </TouchableOpacity>
            </IconContainer>
            <Text
                fontSize={'20px'}
                fontWeight={800}
            >
                Add task
            </Text>
        </Container>
    );
}

export default AddTaskHeader;