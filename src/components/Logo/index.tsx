import logo from "../../assets/DT_logo_A.png";
import styles from "./styles.module.css";


export function Logo() {
    return (
        <div>
            <img className={styles.logo} src={logo} alt="Imagem da dominio" />
        </div>
    )
}
