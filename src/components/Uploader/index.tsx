import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Alert, Col, Container, Row, Spinner } from "reactstrap";
import useUpload from "../../hooks/useUpload/useUpload";
import styles from "./Uploader.module.css";

const Upload = (): ReactElement => {

  const history = useHistory();
  const [file, setFile] = useState<string | null>(null)
  const [loading, success, errorMesaage, upload] = useUpload()

  const handleUploadChange = (event: any): void => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    upload(file)
  }

  const onSuccessRedirect = (): void => {
    if (success) history.push('/')
  }
  useEffect(onSuccessRedirect, [success])

  return (
    <Container>
      <Row>
        <Col xs="12">
          <section className={styles.main}>
            <h1 className="primary-color col-md-3 d-inline-block">Uploader</h1>
            {loading && <Spinner className="col-md-4" color="success" style={{ width: '2rem', height: '2rem' }} type="grow" />}

            <Col xs="12">
              {errorMesaage && <Alert className="" color="danger">
                {errorMesaage}
              </Alert>}
            </Col>


            <form className="col-md-12 mb-5" id="upload_form" encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="file" accept="image/png, image/jpeg" onChange={handleUploadChange} />
              {file && <button>Upload</button>}
            </form>

            {file && (
              <div>
                <img className="preview col-md-6" src={URL.createObjectURL(file)} alt="previewImage" />
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
