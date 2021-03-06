import { useState } from "react";
import { api } from "../../api";

const useVotes = (): any => {

  const [votes, setVotes] = useState(null)

  const vote = (imageId: string, vote: number): void => {
    api.post.votes(imageId, vote)
  }

  const getVotes = (): void => {
    api.get.votes()
      .then((res) => {
        setVotes(res.data)
      })
  }

  return [vote, votes, getVotes]
}

export default useVotes;