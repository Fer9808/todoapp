import React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

import Text from '../Text/Text';
import { 
    Container,
    Input
} from './styles';
import * as ACTIONS from '../../types';
import moment from "moment";


const Deadline = ({
    label,
    date,
    setShowDate,
    showDate,
    onChange
} : ACTIONS.DeadlineInterface) => {
    return (
        <Container>
            <Text
                fontWeight={700}
                fontSize={'15px'}
            >
               { label } 
            </Text>
            <Input 
                onPress={setShowDate}
            >
                <Text
                    fontWeight={500}
                    fontSize={'15px'}
                >
                { moment(date).format('YYYY-MM-DD') } 
                </Text>
            </Input>
            {   showDate &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    display="default"
                    onChange={onChange}
                />
            }
        </Container>
    );
}

export default Deadline;