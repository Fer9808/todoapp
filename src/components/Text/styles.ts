// @ts-ignore
import styled from 'styled-components/native';

interface propsInterface {
    fontSize: string;
    color: string;
    fontWeight: number
}

export const TextComponent = styled.Text`
    font-size: ${(props : propsInterface) => (props.fontSize)};
    color: ${(props : propsInterface) => (props.color)};
    font-weight: ${(props : propsInterface) => (props.fontWeight)};
`