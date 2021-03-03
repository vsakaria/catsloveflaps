import React, { ReactElement } from "react";
import styles from "./CatList.module.css";

const CatList = (): ReactElement => {
  return (
    <section className={styles.main}>
      <h1 className="primary-color">React Accelertor</h1>
    </section>
  );
};

export default CatList;
