import styles from "./styles.module.css";
import "../../styles/global.css";


export function Footer() {
    return (
        <div className={styles['container-footer']}>
            <p className={styles['footer-p']}> Dominio Tec &copy; {new Date().getFullYear()} - Desenvolvido por  <a className={styles['footer-a']} href="https://joaomarcello.vercel.app/">Joaomarcello.dev</a>  </p>
        </div>
    )
}