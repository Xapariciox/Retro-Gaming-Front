import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ServiceUsers } from '../../../features/users/service/service-user';
import style from './registerPage.module.css';
type formData = {
    name: string;
    email: string;
    imageProfile: string;
    password: string;
};
function RegisterPage() {
    const navigate = useNavigate();
    const userRepo = new ServiceUsers();
    const initialState: formData = {
        name: '',
        email: '',
        imageProfile: '',
        password: '',
    };
    const [formState, setFormState] = useState(initialState);
    const handleRegisterInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };
    const handleRegisterSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (!(await userRepo.register(formState).then((item) => item.user))) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Something has gone wrong Try another email`,
            });

            return;
        }
        Swal.fire(`Congratulations! `, `you just registered`, 'success');
        navigate('/login');
    };
    return (
        <>
            <div className={style.formulario}>
                <form
                    onSubmit={handleRegisterSubmit}
                    className={style.formularioSubmit}
                >
                    <p className={style.letrasFormulario}>Register</p>
                    <div className={style.formularioValores}>
                        <input
                            className={style.label}
                            type="text"
                            name="name"
                            value={formState.name}
                            onInput={handleRegisterInput}
                            placeholder="Name"
                            required={true}
                            minLength={2}
                        />
                        <input
                            className={style.label}
                            type="text"
                            name="email"
                            value={formState.email}
                            onInput={handleRegisterInput}
                            placeholder="Email"
                            required={true}
                            minLength={2}
                        />
                        <input
                            className={style.label}
                            type="password"
                            name="password"
                            value={formState.password}
                            onInput={handleRegisterInput}
                            placeholder="Password"
                            required={true}
                        />
 
                    </div>

                    <button type="submit" className={style.button}>
                        Register
                    </button>

                    <Link className={style.letrasRedirigir} to="/login">
                        Are you registered?
                    </Link>
                </form>
            </div>
        </>
    );
}
export default RegisterPage;
