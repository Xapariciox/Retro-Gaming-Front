import { useUser } from '../../../features/users/hook/useUser';

function Profile() {
    const { handleDeleteAccount } = useUser();

    return (
        <>
            <button onClick={() => handleDeleteAccount()}>
                delete Account
            </button>
        </>
    );
}
export default Profile;
