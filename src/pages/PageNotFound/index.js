import React, { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./index.module.css";

const ProfilePage = () => {
  

  return (
    <div className={styles['container']}>
      <h1 className={styles['first-four']}>4</h1>
      <div className={styles['cog-wheel1']}>
        <div className={styles['cog1']}>
          <div className={styles['top']}></div>
          <div className={styles['down']}></div>
          <div className={styles['left-top']}></div>
          <div className={styles['left-down']}></div>
          <div className={styles['right-top']}></div>
          <div className={styles['right-down']}></div>
          <div className={styles['left']}></div>
          <div className={styles['right']}></div>
        </div>
      </div>

      <div className={styles['cog-wheel2']}>
        <div className={styles['cog2']}>
          <div className={styles['top']}></div>
          <div className={styles['down']}></div>
          <div className={styles['left-top']}></div>
          <div className={styles['left-down']}></div>
          <div className={styles['right-top']}></div>
          <div className={styles['right-down']}></div>
          <div className={styles['left']}></div>
          <div className={styles['right']}></div>
        </div>
      </div>

      <h1 className={styles['second-four']}>4</h1>
      <p className={styles['wrong-para']}>Uh Oh! Page not found!</p>
    </div>
  );
};

export default ProfilePage;
