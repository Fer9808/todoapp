import { showMessage } from "react-native-flash-message";
import { StyleSheet } from "react-native";

export const successMessage = (message : string) => {
    showMessage({
        message: "Success",
        description: message,
        type: "success",
        icon: "success",
        style: styles.flashMessage
    });
}

export const failureMessage = (message : string) => {
    showMessage({
        message: "Error",
        description: message,
        type: "danger",
        icon: "danger",
        style: styles.flashMessage
    });
}

const styles = StyleSheet.create({
    flashMessage: {
        alignItems: "center",
    }
})
