import { baseRequest } from '..';

export const favourites = async (imageId: string): Promise<any> => {
    return baseRequest.post('/favourites', { "image_id": imageId })
};
