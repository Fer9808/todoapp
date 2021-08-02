import AsyncStorage from '@react-native-community/async-storage';

import * as ACTION_TYPES from '../actionTypes';
import * as ACTION from '../../types';

export const getTasks = () => async (dispatch : Function) => {
    dispatch({
        type: ACTION_TYPES.LOAD_TASKS 
    });
    return AsyncStorage.getItem("tasks")
    .then((response : ACTION.AsyncStorageResponseInterface) => {
        const tasksList = JSON.parse(response || '[]');
        if(tasksList.length === 0) {
            return dispatch({
                type: ACTION_TYPES.GET_TASKS,
                payload: {
                    completedTasksList: [],
                    pendingTasksList: []
                }
            })
        } else {
            const completedTasksList = tasksList.filter((taskIndividual : ACTION.TaskIndividualInterface) => {
                return taskIndividual.isComplete;
            })
            const pendingTasksList = tasksList.filter((taskIndividual : ACTION.TaskIndividualInterface) => {
                return !taskIndividual.isComplete;
            })
            return dispatch({
                type: ACTION_TYPES.GET_TASKS,
                payload: {
                    completedTasksList,
                    pendingTasksList
                }
            })
        }
    })
    .catch((error) => {
        return dispatch({
            type: ACTION_TYPES.ERROR_TASK,
            payload: {
                error: 'We have a problem to get your Tasks.'
            }
        })
    })
}

export const saveTask = (taskIndividual : ACTION.TaskIndividualInterface) => async (dispatch : Function) => {
    dispatch({
        type: ACTION_TYPES.LOAD_SAVE_TASKS,
        payload: {
            isLoadingSaveTask: true
        }
    });
    return AsyncStorage.getItem("tasks")
    .then(async (response : ACTION.AsyncStorageResponseInterface) => {
        let tasksList = JSON.parse(response || '[]');
        const id = idGenerator();
        const newTask = {
            ...taskIndividual,
            id
        }
        tasksList.push(newTask);
        await AsyncStorage.setItem("tasks", JSON.stringify(tasksList));
        dispatch({
            type: ACTION_TYPES.LOAD_SAVE_TASKS,
            payload: {
                isLoadingSaveTask: false
            }
        });
    })
    .catch((error) => {
        return dispatch({
            type: ACTION_TYPES.ERROR_TASK,
            payload: {
                error: 'We have a problem to create a new Task.'
            }
        })
    })
}

export const updateTaskStatus = (idTask : string) => async (dispatch : Function) => {
    dispatch({
        type: ACTION_TYPES.LOAD_UPDATE_STATUS_TASK,
        payload: {
            isLoadingUpdateStatusTask: true
        }
    });
    return AsyncStorage.getItem("tasks")
    .then(async (response : ACTION.AsyncStorageResponseInterface) => {
        let tasksList = JSON.parse(response || '[]');
        const taskToUpdate = tasksList.filter((taskIndividual : ACTION.TaskIndividualInterface) => {
            return taskIndividual.id === idTask;
        });
        const taskListWithoutElement = tasksList.filter((taskIndividual : ACTION.TaskIndividualInterface) => {
            return taskIndividual.id !== idTask;
        });
        const newTask = {
            ...taskToUpdate[0],
            isComplete: !taskToUpdate[0].isComplete
        }
        taskListWithoutElement.push(newTask);
        await AsyncStorage.setItem("tasks", JSON.stringify(taskListWithoutElement));
        return dispatch({
            type: ACTION_TYPES.LOAD_UPDATE_STATUS_TASK,
            payload: {
                isLoadingUpdateStatusTask: false
            }
        });
    })
    .catch((error) => {
        return dispatch({
            type: ACTION_TYPES.ERROR_TASK,
            payload: {
                error: 'We have a problem to update your Task.'
            }
        })
    })
}

export const clearError = () => async (dispatch : Function) => {
    return dispatch({
        type: ACTION_TYPES.CLEAR_ERROR_TASK
    });
}

export const idGenerator = () => {
    let id = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < charactersLength; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
}
