import React from "react";
import styles from "./index.module.css"
import LoginForm from "../../modules/LoginForm/LoginForm";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles['homepage__left-content']}>
        <div className={styles['homepage__left-content__inside']}>
          <span className={styles['homepage__left-content__inside__title']}>
            Lorem ipsum dolor sit amet 
            <br />
            <span style={{color: "#3E334E"}}>consectetur</span>
          </span>
          <span className={styles['homepage__left-content__inside__desc']} style={{fontWeight: 400, fontSize: 18, color: "#3E334E"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </div>
      <div className={styles['homepage__right-content']}>
        <LoginForm/>
      </div>
    </div>
  );
}

export default Homepage;