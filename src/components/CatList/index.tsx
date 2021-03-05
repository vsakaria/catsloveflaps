import React, { ReactElement } from "react";
import { Alert, Col, Container, Row, Spinner } from "reactstrap";
import useCatVotes from "../../hooks/useGetCatVotes/useCatVotes";
import VotingCard from "../VotingCard";
import styles from "./CatList.module.css";

const CatList = (): ReactElement => {

  const [loading, errorMessage, cats] = useCatVotes()

  return (
    <Container className={styles.main}>
      <Row>
        <Col>
          <section>
            <h1 className="primary-color">Cats Love Flaps</h1>
            {loading && <Spinner color="success" style={{ width: '2rem', height: '2rem' }} type="grow" />}
          </section>
        </Col>
      </Row>

      <Row>
        {cats && cats.map((cat: any) => {
          return (

            <div className="col-sm-3 mb-3" key={cat.id}>
              <VotingCard imageSrc={cat.url} id={cat.id} voteCount={cat.vote} />
            </div>
          )
        })}
      </Row>

      {errorMessage && (<Col>
        <Alert color="danger">
          {errorMessage}
        </Alert>
      </Col>)}
    </Container >
  );
};

export default CatList;