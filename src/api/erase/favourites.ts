import { baseRequest } from '..';

export const favourites = async (favouritesId: string): Promise<any> => {
    return baseRequest.delete(`/favourites/${favouritesId}`)
};
