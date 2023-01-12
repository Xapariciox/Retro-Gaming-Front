import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { appStore } from '../../../infrastructure/store/store';

import Menu from './menu';

describe('Given Menu component', () => {
    describe('When we render the component Menu', () => {
        test('Then it should display form of login', async () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Menu />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/login/i);
            expect(element).toBeInTheDocument();
        });
    });
});
