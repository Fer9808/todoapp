// @ts-ignore
import styled from 'styled-components/native';

interface PropsInterface {
    isCompleted: boolean
}

export const Container = styled.View`
    background-color: white;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    paddingVertical: 20px;
    paddingHorizontal: 20px;
`

export const CheckContainer = styled.TouchableOpacity`
    background-color: ${(props : PropsInterface) => props.isCompleted ? '#12CBCB' : 'white'};
    borderColor: #12CBCB;
    borderRadius: 5px;
    borderWidth: 1px;
    align-items: center;
    justifyContent: center;
    marginRight: 10px;
    width: 20px;
    height: 20px;
`