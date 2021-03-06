import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Alert, Col, Container, Row, Spinner } from "reactstrap";
import useUpload from "../../hooks/useUpload/useUpload";
import styles from "./Uploader.module.css";

const Upload = (): ReactElement => {

  const history = useHistory();
  const [file, setFile] = useState<string | null>(null)
  const [loading, success, errorMesaage, upload] = useUpload()

  /*
    Handlers
  */

  const handleUploadChange = (event: any): void => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event: any): void => {
    event.preventDefault()
    upload(file)
  }

  /*
    Side Effects
  */

  const onSuccessRedirect = (): void => {
    if (success) history.push('/')
  }
  useEffect(onSuccessRedirect, [success])

  return (
    <Container>
      <Row>
        <Col>
          <section className={styles.main}>
            <h1 className="primary-color col-sm-12 d-inline-block">Uploader</h1>
            {loading && <Spinner className="col-sm-4" color="success" style={{ width: '2rem', height: '2rem' }} type="grow" />}

            {errorMesaage && <Alert className="" color="danger">
              {errorMesaage}
            </Alert>}

            <form className="col-sm-12 mb-5" id="upload_form" encType="multipart/form-data" onSubmit={handleSubmit}>
              <label htmlFor="upload">Image Upload</label>
              <input id="upload" type="file" accept="image/png, image/jpeg" onChange={handleUploadChange} />
              {file && <button>Upload</button>}
            </form>

            {file && (
              <div>
                <img className="preview col-sm-6" src={URL.createObjectURL(file)} alt="previewImage" />
              </div>
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Upload;
