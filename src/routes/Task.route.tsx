import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import {
    HomeScreen,
    AddTaskScreen
} from '../views';

const TaskStack = createStackNavigator();

const TaskRoute = () => {
    return (
        <TaskStack.Navigator
            screenOptions={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <TaskStack.Screen 
                name="HomeScreen" 
                component={ HomeScreen }
                options={{
                    headerShown: false
                }}
            />
            <TaskStack.Screen 
                name="AddTaskScreen" 
                component={ AddTaskScreen }
                options={{
                    headerShown: false
                }}
            />
        </TaskStack.Navigator>
    );
}

export default TaskRoute;
