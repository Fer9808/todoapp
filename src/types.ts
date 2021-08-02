import * as ACTION_TYPES from './redux/actionTypes';

// Redux
export interface LoadTasksInterface {
    type: typeof ACTION_TYPES.LOAD_TASKS;
}

export interface GetTasksInterface {
    type: typeof ACTION_TYPES.GET_TASKS;
    payload: {
        completedTasksList: TaskListInterface | [],
        pendingTasksList: TaskListInterface | []
    };
}

export interface LoadSaveTasksInterface {
    type: typeof ACTION_TYPES.LOAD_SAVE_TASKS;
    payload: {
        isLoadingSaveTask: boolean
    }
}

export interface LoadUpdateStatusTaskInterface {
    type: typeof ACTION_TYPES.LOAD_UPDATE_STATUS_TASK;
    payload: {
        isLoadingUpdateStatusTask: boolean
    }
}

export interface ErrorTaskInterface {
    type: typeof ACTION_TYPES.ERROR_TASK;
    payload: {
        error: string
    }
}

export interface ClearErrorTaskInterface {
    type: typeof ACTION_TYPES.CLEAR_ERROR_TASK;
}

export type dataState = TaskListInterface | null

export type ActionTypes =
    LoadTasksInterface 
    | GetTasksInterface
    | LoadSaveTasksInterface
    | LoadUpdateStatusTaskInterface
    | ErrorTaskInterface
    | ClearErrorTaskInterface

// Reducers state
export interface ReduxStore {
    TaskReducer: TaskListInterface;
}

// Data Tasks Interfaces
export interface TaskIndividualInterface {
    id?: string,
    title: string;
    deadline: Date;
    startTime: Date;
    endTime: Date;
    remind: string;
    repeat: string;
    isComplete: boolean
}

export type TaskInterface = TaskIndividualInterface[] | []

export interface TaskListInterface {
    isLoadingTaks: boolean,
    completedTasksList: TaskInterface[] | [],
    pendingTasksList: TaskInterface[] | [],
    isLoadingSaveTask: boolean,
    isLoadingUpdateStatusTask: boolean,
    isError: boolean,
    error: string
}

// Navigations
export interface NavigationInterface {
    addListener: Function;
    canGoBack: Function;
    closeDrawer: Function;
    dangerouslyGetParent: Function;
    dangerouslyGetState: Function;
    dispatch: Function;
    goBack: Function;
    isFocused: Function;
    jumpTo: Function;
    navigate: Function;
    openDrawer: Function;
    removeListener: Function;
    reset: Function;
    setOptions: Function;
    setParams: Function;
    toggleDrawer: Function;
    pop: Function;
}

export interface RouteInterface {
    key: string;
    name: string;
    params: undefined | object
}

// AsyncStorage Types
export type AsyncStorageResponseInterface = string | null

// Components
export interface GeneralContianerInterface {
    children: any,
    verticalOffset?: number
}

export interface TextComponentInterface {
    children: any,
    fontSize: string,
    fontWeight: number,
    color?: string
}

export interface ButtonInterface {
    text: string,
    onPress: Function,
    enableButton?: boolean
}

export interface TaskElementInterface {
    isCompleted: boolean,
    task: string,
    onChangeStatus: Function
}

export interface AddTaskHeaderInterface {
    onPressAction: Function,
}

export interface StringInputInterface {
    label: string,
    value: string,
    onChangeText: Function
}

export interface DeadlineInterface {
    label: string,
    date: Date,
    setShowDate: Function,
    showDate: boolean,
    onChange: any
}

export interface TimeInterface {
    startTime: Date,
    endTime: Date,
    setShowStartTime: Function,
    setShowEndTime: Function,
    showStartTime: boolean,
    showEndTime: boolean,
    onChangeStartTime: any,
    onChangeEndTime: any
}

export interface PickerInterface {
    label: string
    value: string
    onChangeValueAction: Function
    show: boolean
    setShow: Function
}

// Views
export interface HomeScreenInterface {
    navigation: NavigationInterface
}

export interface HomeScreenComponentInterface {
    onPressAction: Function,
    completedTasksList: TaskInterface
    pendingTasksList: TaskInterface
    onChangeStatus: Function,
    isLoadingTaks: boolean,
    isLoadingUpdateStatusTask: boolean
}

export interface AddTaskInterface {
    navigation: NavigationInterface
}

export interface AddTaskComponentInterface {
    onBackAction: Function,
    onPressAction: Function,
    title: string,
    setTitle: Function,
    deadLine: Date
    setShowDate: Function
    showDate: boolean
    onChangeDeadLine: Function,
    startTime: Date,
    endTime: Date,
    setShowStartTime: Function,
    setShowEndTime: Function,
    showStartTime: boolean,
    showEndTime: boolean,
    onChangeStartTime: any,
    onChangeEndTime: any,
    remind: string,
    onChangeRemind: Function,
    showRemind: boolean,
    setShowRemind: Function,
    repeat: string,
    onChangeRepeat: Function,
    showRepeat: boolean,
    setShowRepeat: Function,
    enableButton: boolean
}