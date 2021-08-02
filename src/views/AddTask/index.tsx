import React, { useState, useEffect } from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';

import AddTaskScreen from './AddTaskScreen';
import * as ACTIONS from '../../types';
import {
    useCheckAndroid
} from '../../hooks';
import {
    saveTask,
    clearError
} from '../../redux/actions/task.action'
import {    
    successMessage,
    failureMessage
} from '../../config/messages';

export default function ({ navigation } : ACTIONS.AddTaskInterface) {
    const dispatch = useDispatch();
    const {
        isLoadingSaveTask,
        isError,
        error
    } = useSelector((state : ACTIONS.ReduxStore) => state.TaskReducer);

    const [flagToSave, setFlagToSave] = useState(false);
    const [title, setTitle] = useState('');
    const [deadLine, setDeadLine] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [showStartTime, setShowStartTime] = useState(false);
    const [endTime, setEndTime] = useState(new Date());
    const [showEndTime,setShowEndTime] = useState(false);
    const [remind, setRemind] = useState('10 minutes early');
    const [showRemind, setShowRemind] = useState(false);
    const [repeat, setRepeat] = useState('Once');
    const [showRepeat, setShowRepeat] = useState(false);

    useEffect(() => {
        if(!isLoadingSaveTask && !isError && error === '' && flagToSave) {
            successMessage('Successfull to create a new task');
            setFlagToSave(false);
            setTitle('');
        }
    }, [isLoadingSaveTask]);

    useEffect(() => {
        if(isError) {
            failureMessage(error);
            dispatch(clearError());
        }
    }, [isError]);

    const onChangeDeadLine = (event: Function, selectedDate: Date) => {
        const currentDate = selectedDate || deadLine;
        setShowDate(!useCheckAndroid);
        setDeadLine(currentDate); 
    }

    const onChangeStartTime = (event: Function, selectedDate: Date) => {
        const currentDate = selectedDate || startTime;
        setShowStartTime(!useCheckAndroid);
        setStartTime(currentDate); 
    }

    const onChangeEndTime = (event: Function, selectedDate: Date) => {
        const currentDate = selectedDate || endTime;
        setShowEndTime(!useCheckAndroid);
        setEndTime(currentDate); 
    }

    const onShowRemind = () => {
        setShowRepeat(false);
        setShowRemind(true);
    }

    const onChangeRemind = (itemValue: string) => {
        setShowRemind(!useCheckAndroid);
        setRemind(itemValue);
    }

    const onShowRepeat = () => {
        setShowRemind(false);
        setShowRepeat(true);
    }

    const onChangeRepeat = (itemValue: string) => {
        setShowRepeat(!useCheckAndroid);
        setRepeat(itemValue);
    } 

    const saveData = () => {
        setFlagToSave(true);
        const task = {
            title,
            deadline: deadLine,
            startTime,
            endTime,
            remind,
            repeat,
            isComplete: false
        }
        dispatch(saveTask(task));
    }

    return (
        <AddTaskScreen 
            onBackAction={() => navigation.pop()}
            onPressAction={() => saveData()}
            title={title}
            setTitle={setTitle}
            deadLine={deadLine}
            setShowDate={() => setShowDate(true)}
            showDate={showDate}
            onChangeDeadLine={onChangeDeadLine}
            startTime={startTime}
            endTime={endTime}
            setShowStartTime={setShowStartTime}
            setShowEndTime={setShowEndTime}
            showStartTime={showStartTime}
            showEndTime={showEndTime}
            onChangeStartTime={onChangeStartTime}
            onChangeEndTime={onChangeEndTime}
            remind={remind}
            onChangeRemind={onChangeRemind}
            showRemind={showRemind}
            setShowRemind={onShowRemind}
            repeat={repeat}
            onChangeRepeat={onChangeRepeat}
            showRepeat={showRepeat}
            setShowRepeat={onShowRepeat}
            enableButton={title !== '' || isLoadingSaveTask ? true : false}
        />
    )
}

