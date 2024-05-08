import styles from './SleepingBackendMessage.module.css';

export const SleepingBackendMessage = () => {
  return (
    <h2 className={styles.message}>
      The backend is currently sleeping. The application will start in 1 minute.
    </h2>
  );
};
