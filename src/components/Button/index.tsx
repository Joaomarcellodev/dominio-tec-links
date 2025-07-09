import styles from "./styles.module.css";
import "../../styles/global.css";


export function Button() {
    return (
        <div className={styles['container-links']}>
            <a className={styles['links']} href="https://wa.me/5586995846874?text=Ol%C3%A1%2C%20estou%20interessado(a)%20em%20seus%20servi%C3%A7os!%F0%9F%96%A5%EF%B8%8F%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB">Manutenção de Computadores</a>
            <a className={styles['links']} href="https://wa.me/5586988109565?text=Ol%C3%A1%2C%20estou%20interessado(a)%20nos%20seus%20servi%C3%A7os!%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%F0%9F%96%A5%EF%B8%8F">Criação de Sites</a>
            <a className={styles['links']} href="https://wa.me/558698072808?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os!%F0%9F%96%A5%EF%B8%8F%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB">Marketing Digital</a>
        </div>
    )
}