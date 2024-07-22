import { Link } from "react-router-dom"
import styles from "./CabeceraLink.module.css"


function CabeceraLink({ url, children }) {
    return (
      // Utiliza el componente Link para permitir la navegación a la URL especificada.
      <Link to={url} className={styles.link}>
        {/* Renderiza el contenido pasado como `children` dentro del enlace. */}
        {children}
      </Link>
    );
  }
  
  export default CabeceraLink;