import { baseRequest } from '../../api';

export const images = async (): Promise<any> => {
    return baseRequest.get('/images?limit=100')
};
