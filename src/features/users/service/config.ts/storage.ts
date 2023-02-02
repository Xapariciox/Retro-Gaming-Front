import { supabase } from './config';

export const uploadFile = async (
    fileBody: any,
    name: string,
    idImage: string
) => {
    try {
        if (!fileBody.target.files || fileBody.target.files.length === 0) {
            throw new Error('You must select an image to upload.');
        }
        const file = fileBody.target.files[0];

        const { error: uploadError } = await supabase.storage
            .from('img')
            .upload(
                `imagesUsers/imagesOf${name}/photoOf${name}${idImage}`,
                file,
                {
                    upsert: false,
                }
            );

        if (uploadError) {
            throw uploadError;
        }
    } catch (error) {
        console.log(error);
    }
};
export const getUrl = async (name: string, idImage: string) => {
    try {
        const { data } = supabase.storage

            .from('img')
            .getPublicUrl(
                `imagesUsers/imagesOf${name}/photoOf${name}${idImage}`
            );
        return data;
    } catch (error) {
        console.log(error);
    }
};
