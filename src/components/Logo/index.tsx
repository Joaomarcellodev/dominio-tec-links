import logo from "../../assets/DT_logo_A.png";
import styles from "./styles.module.css";
import "../../styles/global.css";


export function Logo() {
    return (
        <div>
            <img className={styles.logo} src={logo} alt="Imagem da dominio" />
            <h1 className={styles.title}>Dominio Tec</h1>
        </div>
    )
}
