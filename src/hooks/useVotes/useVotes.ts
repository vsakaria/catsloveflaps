import { api } from "../../api";

const useVotes = (): any => {

  const vote = (imageId: string, vote: number): void => {
    api.post.votes(imageId, vote)
  }

  return [vote]
}

export default useVotes;