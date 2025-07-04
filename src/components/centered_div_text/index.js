import styles from "./centDivText.module.css";

export default function Button(props) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.h1}>{props?.error}</h1>
        <p className={styles.p}>
          {props?.message}
        </p>
      </div>
    </div>
  );
}
