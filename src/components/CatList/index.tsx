import React, { ReactElement, useEffect } from "react";
import { api } from "../../api";
import styles from "./CatList.module.css";

const CatList = (): ReactElement => {

  useEffect(() => {
    api.get.images()
  })

  return (
    <section className={styles.main}>
      <h1 className="primary-color">React Accelertor</h1>
    </section>
  );
};

export default CatList;
