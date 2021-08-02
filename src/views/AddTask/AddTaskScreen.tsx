import React from 'react';

import {
  GeneralContainer,
  AddTaskHeader,
  Button,
  StringInput,
  Deadline,
  Time,
  Picker
} from '../../components';
import {
  QuestionnaireContainer
} from './styles';
import * as ACTIONS from '../../types';

const AddTaskScreen = ({
  onBackAction,
  onPressAction,
  title,
  setTitle,
  deadLine,
  setShowDate,
  showDate,
  onChangeDeadLine,
  startTime,
  endTime,
  setShowStartTime,
  setShowEndTime,
  showStartTime,
  showEndTime,
  onChangeStartTime,
  onChangeEndTime,
  remind,
  onChangeRemind,
  showRemind,
  setShowRemind,
  repeat,
  onChangeRepeat,
  showRepeat,
  setShowRepeat,
  enableButton
} : ACTIONS.AddTaskComponentInterface ) => {
  return (
    <GeneralContainer>
      <AddTaskHeader 
        onPressAction={onBackAction}
      />
      <QuestionnaireContainer>
        <StringInput
          label={'Title'}
          onChangeText={setTitle} 
          value={title}
        />
        <Deadline 
          label={'Deadline'}
          date={deadLine}
          setShowDate={setShowDate}
          showDate={showDate}
          onChange={onChangeDeadLine}
        />
        <Time 
          startTime={startTime}
          endTime={endTime}
          setShowStartTime={setShowStartTime}
          setShowEndTime={setShowEndTime}
          showStartTime={showStartTime}
          showEndTime={showEndTime}
          onChangeStartTime={onChangeStartTime}
          onChangeEndTime={onChangeEndTime}
        />
        <Picker 
          label={'Remind'}
          value={remind}
          onChangeValueAction={onChangeRemind}
          show={showRemind}
          setShow={setShowRemind}
        />
        <Picker 
          label={'Repeat'}
          value={repeat}
          onChangeValueAction={onChangeRepeat}
          show={showRepeat}
          setShow={setShowRepeat}
        />
      </QuestionnaireContainer>
      <Button 
        onPress={onPressAction}
        text={'Create a Task'}
        enableButton={enableButton}
      />
    </GeneralContainer>
  )
}

export default AddTaskScreen;