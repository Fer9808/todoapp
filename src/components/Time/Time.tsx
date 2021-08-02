import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

import Text from '../Text/Text';
import { 
    Container,
    ContainerTime,
    Input
} from './styles';
import * as ACTIONS from '../../types';


const Time = ({
    startTime,
    endTime,
    setShowStartTime,
    setShowEndTime,
    showStartTime,
    showEndTime,
    onChangeStartTime,
    onChangeEndTime
} : ACTIONS.TimeInterface) => {
    return (
        <Container>
            <ContainerTime>
                <Text
                    fontWeight={700}
                    fontSize={'15px'}
                >
                    Start time
                </Text>
                <Input 
                    onPress={setShowStartTime}
                >
                    <Text
                        fontWeight={500}
                        fontSize={'15px'}
                    >
                    { moment(startTime).format('LT') } 
                    </Text>
                </Input>
                {   showStartTime &&
                    <DateTimePicker
                        testID="startTimePicker"
                        value={startTime}
                        mode={'time'}
                        display="default"
                        is24Hour={true}
                        onChange={onChangeStartTime}
                    />
                }
            </ContainerTime>
            <ContainerTime>
                <Text
                    fontWeight={700}
                    fontSize={'15px'}
                >
                    End time 
                </Text>
                <Input 
                    onPress={setShowEndTime}
                >
                    <Text
                        fontWeight={500}
                        fontSize={'15px'}
                    >
                    { moment(endTime).format('LT') } 
                    </Text>
                </Input>
                {   showEndTime &&
                    <DateTimePicker
                        testID="endTimePicker"
                        value={endTime}
                        mode={'time'}
                        display="default"
                        is24Hour={true}
                        onChange={onChangeEndTime}
                    />
                }
            </ContainerTime>
        </Container>
    );
}

export default Time;