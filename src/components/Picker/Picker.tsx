import React from "react";
import { Picker } from '@react-native-picker/picker';

import Text from '../Text/Text';
import { 
    Container,
    Input
} from './styles';
import * as ACTIONS from '../../types';

const PickerItem = ({
    label,
    value,
    onChangeValueAction,
    show,
    setShow,
} : ACTIONS.PickerInterface) => {
    return (
        <Container>
            <Text
                fontWeight={700}
                fontSize={'15px'}
            >
               { label } 
            </Text>
            <Input 
                onPress={setShow}
            >
                <Text
                    fontWeight={500}
                    fontSize={'15px'}
                >
                { value } 
                </Text>
            </Input>
            {   show &&
                <> 
                {   label === 'Repeat' ?
                    <Picker
                        selectedValue={value}
                        onValueChange={(itemValue, itemIndex) => {
                            onChangeValueAction(itemValue);
                        }}
                    >
                        <Picker.Item label="Once" value="Once" />
                        <Picker.Item label="Daily" value="Daily" />
                        <Picker.Item label="Mon to Fri" value="Mon to Fri" />
                    </Picker> :
                    <Picker
                        selectedValue={value}
                        onValueChange={(itemValue, itemIndex) => {
                            onChangeValueAction(itemValue);
                        }}
                    >
                        <Picker.Item label="10 minutes early" value="10 minutes early" />
                        <Picker.Item label="20 minutes early" value="20 minutes early" />
                        <Picker.Item label="30 minutes early" value="30 minutes early" />
                    </Picker>
                }
                </>
            }
        </Container>
    );
}

export default PickerItem;