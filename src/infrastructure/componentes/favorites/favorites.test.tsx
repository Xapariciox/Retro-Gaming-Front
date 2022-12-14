import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore2 } from '../../mockStore/mockStore2';
import Favorites from './favorites';

describe('Given LoginPage component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of consoleitem', async () => {
            render(
                <Router>
                    <Provider store={mockStore2}>
                        <Favorites />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/manio/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByText('❌'));
        });
    });
});
