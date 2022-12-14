import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore, productMock } from '../../mockStore/mockStore';

import ConsolesItem from './consolesItem';
describe('Given LoginPage component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of consoleitem', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <ConsolesItem item={productMock} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/pepe/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText('⭐'));
        });
    });
});
