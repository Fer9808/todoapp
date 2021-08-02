import React from 'react';
import {
  ScrollView
} from 'react-native';

import {
  GeneralContainer,
  HomeHeader,
  Text, 
  Button,
  TaskElement
} from '../../components';
import { 
  TaskContainerList,
  TaskIndividualSection,
  SectionTitleContainer
} from './styles';
import * as ACTIONS from '../../types';

const HomeScreen = ({
  onPressAction,
  completedTasksList,
  pendingTasksList,
  onChangeStatus,
  isLoadingTaks,
  isLoadingUpdateStatusTask
} : ACTIONS.HomeScreenComponentInterface) => {
  return (
    <GeneralContainer>
      <HomeHeader />
      <TaskContainerList>
        <TaskIndividualSection>
          <SectionTitleContainer>
            <Text
                fontSize={'18px'}
                fontWeight={500}
            >
                Completed tasks
            </Text>
          </SectionTitleContainer>
          <ScrollView>
            {
            completedTasksList.map((task: ACTIONS.TaskIndividualInterface, index: number) => (
                <TaskElement
                  key={ index.toString() }
                  isCompleted={task.isComplete}
                  task={task.title}
                  onChangeStatus={() => onChangeStatus(task.id)}
                />
              ))
            }
          </ScrollView>
        </TaskIndividualSection>
        <TaskIndividualSection
          isPendingSection={true}
        >
          <SectionTitleContainer>
            <Text
                fontSize={'18px'}
                fontWeight={500}
            >
                Pending tasks
            </Text>
          </SectionTitleContainer>
          <ScrollView>
            { 
            pendingTasksList.map((task: ACTIONS.TaskIndividualInterface, index: number) => (
                <TaskElement
                  key={index.toString()}
                  isCompleted={task.isComplete}
                  task={task.title}
                  onChangeStatus={() => onChangeStatus(task.id)}
                />
              ))
            }
          </ScrollView>
        </TaskIndividualSection>
      </TaskContainerList>
      <Button 
        onPress={onPressAction}
        text={'Add a task'}
        enableButton={ isLoadingTaks || isLoadingUpdateStatusTask ? false : true }
      />
    </GeneralContainer>
  )
}

export default HomeScreen;