import * as React from 'react';
import { render } from '@testing-library/react-native';

import AddTaskHeader from '../../src/components/AddTaskHeader/AddTaskHeader';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons'); 

describe('<AddTaskHeader />', () => {
    const  propsMockup = {
        onPressAction: jest.fn()
    }

    const component = render(<AddTaskHeader { ...propsMockup } />)

    it('Render correctly AddTaskHeader Component', () => {
        expect(component).toMatchSnapshot();
    })
})
