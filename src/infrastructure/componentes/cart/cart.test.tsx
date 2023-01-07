import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mockStore/mockStore';
import { mockStore2 } from '../../mockStore/mockStore2';
import Cart from './cart';
describe('Given cart component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of cart', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <Cart />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/cart/i);

            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText('+'));
            userEvent.click(screen.getByText('-'));
            userEvent.click(screen.getByText('❌'));
        });
    });
    describe('When we render the component cart', () => {
        test('Then it should display form of cart', async () => {
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <Cart />
                    </Provider>
                </Router>
            );

            userEvent.click(screen.getByText('-'));
        });
    });
});
