import React, { ReactElement, useEffect } from "react";
import { Alert, Col, Container, Row, Spinner } from "reactstrap";
import useGetImages from "../../hooks/useGetImages/useGetImages";
import VotingCard from "../VotingCard";
import styles from "./CatList.module.css";

const CatList = (): ReactElement => {

  const [loading, errorMessage, cats, getImages] = useGetImages()

  useEffect(() => {
    if (!cats) getImages()
  }, [cats, getImages])

  return (
    <Container className={styles.main}>
      <Row>
        <Col md="12">
          <section>
            <h1 className="primary-color col-md-4 d-inline-block">Cats Love Flaps</h1>
            {loading && <Spinner className="col-md-4" color="success" style={{ width: '2rem', height: '2rem' }} type="grow" />}
          </section>
        </Col>
      </Row>

      <Row>
        {cats && cats.map((cat: any) => {
          return (

            <div className="col-sm-3 col-xs-1 mb-3" key={cat.id}>
              <VotingCard imageSrc={cat.url} id={cat.id} />
            </div>
          )
        })}
      </Row>

      {errorMessage && (<Col xs="12">
        <Alert color="danger">
          {errorMessage}
        </Alert>
      </Col>)}
    </Container >
  );
};

export default CatList;
