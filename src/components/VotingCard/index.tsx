import React, { ReactElement, useEffect, useState } from "react";

import heart from '../../assets/images/heart.svg';
import outlineHeart from '../../assets/images/heart-outline.svg';
import thumbsUp from '../../assets/images/thumbs-up.svg';
import thumbsDown from '../../assets/images/thumbs-down.svg';

import styles from "./VotingCard.module.css";
import useFavourite from "../../hooks/useFavourite/useFavourite";
import useVotes from "../../hooks/useVotes/useVotes";
import { Col, Row } from "reactstrap";

const VotingCard = ({ imageSrc, id, voteCount }: { imageSrc: string, id: string, voteCount: number }): ReactElement => {

  const [favouriteId, favourite, unFavourite] = useFavourite()
  const [vote] = useVotes()
  const [displayFavorited, setDisplayFavorited] = useState(false)

  const onFavClick = (): void => {
    (displayFavorited) ? unFavourite(favouriteId) : favourite(id)
  }

  const onVoteClick = (upDown: number): void => {
    vote(id, upDown)
  }

  const updateFavourite = (): void => {
    (favouriteId) ? setDisplayFavorited(true) : setDisplayFavorited(false)
  }
  useEffect(updateFavourite, [favouriteId])

  const favorite = (): ReactElement => (<img onClick={onFavClick} alt="favorite" src={heart} className={`${styles.icon} `} />)
  const unFavorite = (): ReactElement => (<img onClick={onFavClick} alt="unFavorite" src={outlineHeart} className={`${styles.icon}   `} />)

  return (
    <>
      <Row>
        <Col>
          <img className="col-sm-12 mb-3" src={imageSrc} alt={id} />
        </Col>
      </Row>
      <Row>
        <Col>
          {displayFavorited ? favorite() : unFavorite()}
        </Col>
        <Col>
          <img onClick={(): void => onVoteClick(1)} alt="thumbsUp" src={thumbsUp} className={`${styles.icon}`} />
        </Col>
        <Col>
          <img onClick={(): void => onVoteClick(0)} alt="thumbsDown" src={thumbsDown} className={`${styles.icon}`} />
        </Col>
        <Col>
          <div className={`d-inline`}>{voteCount}</div>
        </Col>
      </Row>
    </ >
  );
};

export default VotingCard;
