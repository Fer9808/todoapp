// @ts-ignore
import styled from 'styled-components/native';

interface PropsInterface {
    disabled: boolean
}

export const ButtonContainer = styled.TouchableOpacity`
    marginHorizontal: 20px;
    border-radius: 15px;
    background-color: #098606;
    alignItems: center;
    justifyContent: center;
    paddingVertical: 13px;
    marginVertical: 20px;
    opacity: ${(props: PropsInterface) => (props.disabled ? 0.6 : 1)}
`;