import React from "react";

import {
    TextComponent
} from './styles'
import * as ACTIONS from '../../types';


const Text = ({
    children,
    fontSize,
    fontWeight,
    color = 'black'
} : ACTIONS.TextComponentInterface) => {
    return (
        <TextComponent
            allowFontScaling={false}
            fontSize={fontSize}
            color={color}
            fontWeight={fontWeight}
        >
            { children }
        </TextComponent>
    );
}

export default Text;