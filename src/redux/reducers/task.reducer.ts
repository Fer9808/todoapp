import * as ACTION_TYPES from '../actionTypes';
import * as ACTION from '../../types';

const initialState = {
    isLoadingTaks: false,
    completedTasksList: [],
    pendingTasksList: [],
    isLoadingSaveTask: false,
    isLoadingUpdateStatusTask: false,
    isError: false,
    error: ''
}

const taskReducer = (state : ACTION.TaskListInterface = initialState, action : ACTION.ActionTypes) => {
    switch (action.type) {
        case ACTION_TYPES.LOAD_TASKS:
            return { 
                ...state, 
                isLoadingTaks: true, 
            };
        case ACTION_TYPES.GET_TASKS:
            return {
                ...state, 
                isLoadingTaks: false, 
                completedTasksList: action.payload.completedTasksList,
                pendingTasksList: action.payload.pendingTasksList
            };
        case ACTION_TYPES.LOAD_SAVE_TASKS:
            return {
                ...state, 
                isLoadingSaveTask: action.payload.isLoadingSaveTask, 
            };
        case ACTION_TYPES.LOAD_UPDATE_STATUS_TASK:
            return {
                ...state, 
                isLoadingUpdateStatusTask: action.payload.isLoadingUpdateStatusTask, 
            };
        case ACTION_TYPES.ERROR_TASK:
            return {
                ...state, 
                isError: true,
                error: action.payload.error, 
            };
        case ACTION_TYPES.CLEAR_ERROR_TASK:
            return {
                ...state, 
                isError: false,
                error: '', 
            };
        default:
            return state;
    }
};

export default taskReducer;
