import styles from "./styles.module.css";
import "../../styles/global.css";


export function Footer() {
    return (
        <div className={styles['container-footer']}>
            <p className={styles['footer-p']}>&copy;{new Date().getFullYear()} Desenvolvido por <a className={styles['footer-a']} href="https://www.instagram.com/dominio_tec?igsh=cGgwd3FlNXJyaXVq">dominio_tec</a> </p>
        </div>
    )
}