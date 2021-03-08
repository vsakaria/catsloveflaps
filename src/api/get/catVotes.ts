import axios from 'axios';
import { images } from './images'
import { votes } from './votes'

export const catVotes = async (): Promise<any> => {
  return axios.all([images(), votes()])
    .then(axios.spread((imagesRes, votesRes) => {
      const images = imagesRes.data
      const votes = votesRes.data

      images.map((image: any) => {
        let imageVote = 0
        votes.forEach((vote: any) => {
          if (image.id === vote.image_id) {

            if (vote.value === 1) {
              ++imageVote
            }

            if (vote.value === 0) {
              --imageVote
            }
          }
        })
        return image['vote'] = imageVote
      });

      return [images]
    }))
    .catch(error => console.log(error));
};