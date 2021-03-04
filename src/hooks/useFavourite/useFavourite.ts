import { useState } from "react";
import { api } from "../../api";

const useFavourite = (): any => {

  const [favouriteId, setFavouriteId] = useState<string | null>(null)

  const favourite = (imageId: string): void => {

    api.post.favourites(imageId)
      .then((res) => {
        setFavouriteId(res.data.id)
      })
  }

  const unFavourite = (favouriteId: string): void => {
    api.erase.favourites(favouriteId)
    setFavouriteId(null)
  }

  return [favouriteId, favourite, unFavourite]

}

export default useFavourite;