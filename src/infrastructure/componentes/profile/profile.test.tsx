import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import Profile from './profile';
import { mockStore } from '../../mockStore/mockStore';
import { mockStore3 } from '../../mockStore/mockStore3';

describe('Given LoginPage component', () => {
    describe('When we render the component ProfilePage', () => {
        test('then it should show the user profile', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <Profile />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/delete/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByRole('button'));
        });
    });
    describe('When we render the component ProfilePage but whit conditionals', () => {
        test('then it should show the user profile', async () => {
            render(
                <Router>
                    <Provider store={mockStore3}>
                        <Profile />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/empty/i);
            expect(element).toBeInTheDocument();
        });
    });
});
