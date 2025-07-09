import styles from "./styles.module.css";
import "../../styles/global.css";


export function Button() {
    return (
        <div className={styles['container-links']}>
            <a className={styles['links']} href="">Manutenção de Computadores</a>
            <a className={styles['links']} href="">Criação de Sites</a>
            <a className={styles['links']} href="">Marketing Digital</a>
        </div>
    )
}