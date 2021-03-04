import React, { ReactElement, useEffect, useState } from "react";

import heart from '../../assets/images/heart.svg';
import outlineHeart from '../../assets/images/heart-outline.svg';
import thumbsUp from '../../assets/images/thumbs-up.svg';
import thumbsDown from '../../assets/images/thumbs-down.svg';

import styles from "./VotingCard.module.css";
import useFavourite from "../../hooks/useFavourite/useFavourite";

const VotingCard = ({ imageSrc, id }: { imageSrc: string, id: string }): ReactElement => {

  const [, favouriteId, favourite, unFavourite] = useFavourite()
  const [displayFavorited, setDisplayFavorited] = useState(false)

  const onFavClick = (): void => {
    (displayFavorited) ? unFavourite(favouriteId) : favourite(id)
  }

  const updateFavourite = (): void => {
    (favouriteId) ? setDisplayFavorited(true) : setDisplayFavorited(false)
  }
  useEffect(updateFavourite, [favouriteId])

  const favorite = (): ReactElement => (<img onClick={onFavClick} alt="favorite" src={heart} className={`${styles.icon} col-sm-3 col-xs-2 mb-3`} />)
  const unFavorite = (): ReactElement => (<img onClick={onFavClick} alt="unFavorite" src={outlineHeart} className={`${styles.icon} col-sm-3 col-xs-2 mb-3`} />)

  return (
    <>
      <img className="col-sm-12 mb-3" src={imageSrc} alt={id} />
      { displayFavorited ? favorite() : unFavorite()}

      <img onClick={onFavClick} alt="thumbsUp" src={thumbsUp} className={`${styles.icon} col-sm-3 col-xs-2 mb-3`} />
      <img onClick={onFavClick} alt="thumbsDown" src={thumbsDown} className={`${styles.icon} col-sm-3 col-xs-2 mb-3`} />
    </ >
  );
};

export default VotingCard;