import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/daniel-silva-dxp.png" alt="Profile image" />
      <div>
        <strong>Daniel Silva</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
