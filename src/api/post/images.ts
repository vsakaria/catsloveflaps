import { baseRequest } from '../../api';

export const images = async (file: any): Promise<any> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await baseRequest.post('/images/upload', formData);
    return { response };
};
