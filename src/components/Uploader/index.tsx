import React, { ReactElement, useState } from "react";
import { api } from "../../api";
import styles from "./Uploader.module.css";

const Upload = (): ReactElement => {

  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const handleUploadChange = (event: any): void => {
    const file = event.target.files[0]
    setPreviewImage(URL.createObjectURL(file))
    api.post.images(file)
  }

  return (
    <section className={styles.main}>
      <h1 className="primary-color">Uploader</h1>

      <form id="upload_form" encType="multipart/form-data">
        <input type="file" accept="image/png, image/jpeg" onChange={handleUploadChange} />
      </form>

      {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="previewImage" />
        </div>
      )}
    </section>
  );
};

export default Upload;
