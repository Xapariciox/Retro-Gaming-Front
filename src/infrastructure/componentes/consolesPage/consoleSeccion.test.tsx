import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { mockStore } from '../../mockStore/mockStore';
import SeccionConsoles from './consolesSeccion';
describe('Given LoginPage component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of consoleitem', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <SeccionConsoles />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/pepe/i);
            expect(element).toBeInTheDocument();
        });
    });
});
