import React from "react";
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    CheckContainer
} from './styles'
import Text from '../Text/Text';
import * as ACTIONS from '../../types';


const TaskElement = ({
    isCompleted,
    task,
    onChangeStatus
} : ACTIONS.TaskElementInterface) => {
    return (
        <Container>
            <CheckContainer
                onPress={onChangeStatus}
                isCompleted={isCompleted}
            >
                {   isCompleted &&
                    <MaterialCommunityIcons name="check" color={'white'} size={15} />
                }
            </CheckContainer>
            <Text
                fontSize={'15px'}
                fontWeight={400}
            >
                { task }
            </Text>
        </Container>
    );
}

export default TaskElement;