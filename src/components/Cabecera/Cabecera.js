import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo-alura.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera() {
    return (
      <header className={styles.cabecera}>
        {/* Enlace a la página principal (home) */}
        <Link to="/">
          <section className={styles.logoContainer}>
            {/* Logo de la aplicación */}
            <img src={logo} alt="Logo Alura" /> 
            <span>Cinema</span>
          </section>
        </Link>
  
        {/* Menú de navegación */}
        <nav>
          <CabeceraLink url="./">
            Home
          </CabeceraLink>
          <CabeceraLink url="./Favoritos">
            Favoritos
          </CabeceraLink>
        </nav>
      </header>
    );
  }
  
  export default Cabecera;