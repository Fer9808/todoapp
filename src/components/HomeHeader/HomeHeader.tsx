import React from "react";
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    TextContainer,
    IconsContainer,
    IconIndividualContainer,
    TagIconContainer
} from './styles'
import Text from '../Text/Text';


const HomeHeader = () => {
    return (
        <Container>
            <TextContainer>
                <Text
                    fontSize={'20px'}
                    fontWeight={800}
                >
                    To-Do App
                </Text>
            </TextContainer>
            <IconsContainer>
                <IconIndividualContainer>
                    <MaterialCommunityIcons name="magnify" color={'#7A7A7A'} size={25} />
                </IconIndividualContainer>
                <IconIndividualContainer>
                    <MaterialCommunityIcons name="bell-outline" color={'#7A7A7A'} size={25} />
                    <TagIconContainer />
                </IconIndividualContainer>
                <IconIndividualContainer>
                    <MaterialCommunityIcons name="menu" color={'#7A7A7A'} size={25} />
                </IconIndividualContainer>
            </IconsContainer>
        </Container>
    );
}

export default HomeHeader;