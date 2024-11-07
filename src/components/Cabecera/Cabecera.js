import { Link } from "react-router-dom";  // Importa el componente 'Link' desde 'react-router-dom' para la navegación sin recargar la página.
import styles from "./Cabecera.module.css";  // Importa los estilos específicos del componente desde un archivo CSS modular.
import logo from "./logo-alura.png";  // Importa la imagen del logo de la aplicación desde el archivo 'logo-alura.png'.
import CabeceraLink from "../CabeceraLink/CabeceraLink";  // Importa el componente 'CabeceraLink', que renderiza los enlaces de navegación.

function Cabecera() {
  return (
    <header className={styles.cabecera}> {/* Aplica la clase 'cabecera' desde el archivo CSS modular a este contenedor <header>. */}
      {/* Enlace a la página principal (home) */}
      <Link to="/"> {/* Crea un enlace que redirige a la página principal ('/'). */}
        <section className={styles.logoContainer}> {/* Contenedor del logo con la clase 'logoContainer' aplicada desde el archivo CSS modular. */}
          {/* Logo de la aplicación */}
          <img src={logo} alt="Logo Alura" /> {/* Muestra el logo de la aplicación importado desde 'logo-alura.png'. */}
          <span>Cinema</span> {/* Muestra el texto 'Cinema' al lado del logo, representando el nombre de la aplicación. */}
        </section>
      </Link>
      {/* Menú de navegación */}
      <nav> {/* Contenedor para los enlaces de navegación. */}
        <CabeceraLink url="./"> {/* Componente 'CabeceraLink' que renderiza un enlace con la URL proporcionada. */}
          Home {/* Texto del enlace que lleva a la ruta '/' (home). */}
        </CabeceraLink>
        <CabeceraLink url="./Favoritos"> {/* Otro componente 'CabeceraLink' para el enlace a la página 'Favoritos'. */}
          Favoritos {/* Texto del enlace que lleva a la ruta '/Favoritos'. */}
        </CabeceraLink>
      </nav>
    </header>
  );
}

export default Cabecera;