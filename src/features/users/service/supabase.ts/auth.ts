import { supabase } from './config';

export const signUpWithEmail = async (user: any) => {
    try {
        const result = await supabase.auth.signUp(user);
        return result;
    } catch (error) {
        console.log(error);
    }
};
