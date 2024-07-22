import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";
import { useFavoritosContext } from "context/Favoritos";

function Favoritos() {
  // Obtiene el estado de los favoritos desde el contexto de favoritos.
  const { favorito } = useFavoritosContext();

  return (
    <>
      <Banner img="favorite" color="#44d97d" /> {/* Muestra el componente Banner con la imagen "favorite" y color de fondo "#44d97d". */}
      <Titulo>
        <h1>Mis favoritos</h1> {/* Muestra el título de la página "Mis favoritos". */}
      </Titulo>
      <section className={styles.container}> {/* Contenedor para los favoritos con estilos del módulo CSS. */}
        {favorito.map((fav) => { // Itera sobre el array de favoritos.
          return <Card {...fav} key={fav.id} />; // Renderiza un componente Card para cada favorito, pasando todas las propiedades del favorito.
        })}
      </section>
    </>
  );
}

export default Favoritos; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
