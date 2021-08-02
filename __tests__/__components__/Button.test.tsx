import * as React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../../src/components/Button/Button';

describe('<Button />', () => {
    const  propsMockup = {
        text: 'Hola',
        onPress: jest.fn(),
        enableButton: true
    }

    const component = render(<Button { ...propsMockup } />)

    it('Render correctly Button Component', () => {
        expect(component).toMatchSnapshot();
    })
})
