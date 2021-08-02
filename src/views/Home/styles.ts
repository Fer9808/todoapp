// @ts-ignore
import styled from 'styled-components/native';

interface PropsInterface {
    isPendingSection?: boolean
}

export const TaskContainerList = styled.View`
    flex: 1;
    background-color: white;
`

export const TaskIndividualSection = styled.View`
    maxHeight: 50%;
    background-color: white;
    paddingTop: 40px;
    paddingBottom: ${(props : PropsInterface) => props.isPendingSection ? '40px' : '0px'};
`

export const SectionTitleContainer = styled.View`
    marginBottom: 40px;
    marginHorizontal: 20px;
`