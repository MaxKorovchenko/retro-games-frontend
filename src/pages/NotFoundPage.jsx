const styles = {
  wrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#dc181b',
    letterSpacing: '20px',
    textShadow: '1px 1px 2px yellow',
    userSelect: 'none',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 40,
    marginBottom: 30,
  },
  text: {
    fontSize: 50,
    textShadow: '5px 5px 5px yellow',
  },
};

const NotFoundPage = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>PAGE NOT FOUND</h1>
      <p style={styles.subtitle}>404</p>
      <p style={styles.text}>GAME OVER</p>
    </div>
  );
};

export default NotFoundPage;
