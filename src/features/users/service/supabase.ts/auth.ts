import { supabase } from './config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signUpWithEmail = async (user: any) => {
    try {
        const result = await supabase.auth.signUp(user);
        return result;
    } catch (error) {
        console.log(error);
    }
};
