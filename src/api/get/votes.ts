import { baseRequest } from '../../api';

export const votes = async (): Promise<any> => {
    return baseRequest.get('/votes')
};
