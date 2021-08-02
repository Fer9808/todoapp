import React, { useState, useEffect } from 'react';
import {
    useDispatch,
    useSelector
} from 'react-redux';
import { useIsFocused } from '@react-navigation/native'

import HomeScreen from './HomeScreen';
import * as ACTIONS from '../../types';
import {
    getTasks,
    updateTaskStatus,
    clearError
} from '../../redux/actions/task.action'
import {    
    successMessage,
    failureMessage
} from '../../config/messages';
import { usePrevProps } from '../../hooks' 

export default function ({ navigation } : ACTIONS.HomeScreenInterface) {
    const dispatch = useDispatch();
    const {
        isLoadingTaks,
        completedTasksList,
        pendingTasksList,
        isLoadingUpdateStatusTask,
        isError,
        error
    } = useSelector((state : ACTIONS.ReduxStore) => state.TaskReducer);
    const isFocused = useIsFocused();
    const prevProps = usePrevProps(isFocused);

    const [flagToUpdate, setFlagToUpdate] = useState(false);

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    useEffect(() => {
        if (prevProps !== isFocused && prevProps !== undefined) {
            if (isFocused) {
                dispatch(getTasks());
            }
        }
    }, [isFocused])

    useEffect(() => {
        if(!isLoadingUpdateStatusTask && !isError && error === '' && flagToUpdate) {
            successMessage('Successfull to update your task');
            setFlagToUpdate(false);
            dispatch(getTasks());
        }
    }, [isLoadingUpdateStatusTask]);

    useEffect(() => {
        if(isError) {
            failureMessage(error);
            dispatch(clearError());
        }
    }, [isError]);
    
    const onChangeStatus = (id: string) => {
        setFlagToUpdate(true);
        dispatch(updateTaskStatus(id));
    }

    return (
        <HomeScreen 
            onPressAction={() => navigation.navigate('AddTaskScreen')}
            completedTasksList={completedTasksList}
            pendingTasksList={pendingTasksList}
            onChangeStatus={onChangeStatus}
            isLoadingTaks={isLoadingTaks}
            isLoadingUpdateStatusTask={isLoadingUpdateStatusTask}
        />
    )
}

