import styles from "./announcement-bar.module.css";

export function AnnouncementBar({ message }: { message: string }) {
  return (
    <div className={styles.bar}>
      <p><span className={styles.heart} aria-hidden="true">♥</span>{message}</p>
    </div>
  );
}
