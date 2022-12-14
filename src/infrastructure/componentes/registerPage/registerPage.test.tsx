import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { appStore } from '../../../infrastructure/store/store';
import { mockStore } from '../../../infrastructure/mockStore/mockStore';
import RegisterPage from './registerPage';

describe('Given LoginPage component', () => {
    describe('When we render the component LoginPage', () => {
        test('Then it should display form of register', async () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <RegisterPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByPlaceholderText(/password/i);
            expect(element).toBeInTheDocument();
            fireEvent.input(await screen.findByPlaceholderText('password'));
        });
        test('Then it should display of welcome', async () => {
            render(
                <Router>
                    <Provider store={mockStore}>
                        <RegisterPage />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Formulario/i);
            expect(element).toBeInTheDocument();
            userEvent.click(await screen.findByRole('button'));
        });
    });
});
