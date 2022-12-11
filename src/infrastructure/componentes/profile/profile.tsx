import { useUser } from '../../../features/users/hook/useUser';

function Profile() {
    const { handleDeleteAccount } = useUser();
    const token = localStorage.getItem('token');
    function parseJwt(token: string) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
    const { id } = parseJwt(token as string);

    return (
        <>
            <button onClick={() => handleDeleteAccount()}>
                delete Account
            </button>
        </>
    );
}
export default Profile;
