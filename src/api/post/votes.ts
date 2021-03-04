import { baseRequest } from '../../api';

export const votes = async (imageId: string, value: number): Promise<any> => {
    return baseRequest.post('/votes', {
        "image_id": imageId,
        "value": value
    })
};
