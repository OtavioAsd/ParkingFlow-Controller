import styles from '../../styles/sass/header.module.scss';
import img from '../../assets/PFC-logo.png';

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={img} alt="Logo" className={styles.img} />
        {props.children}
      </nav>
    </header>
  );
}