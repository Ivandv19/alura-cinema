
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
      <main>
        {/* Muestra el componente Banner con la imagen "favorite" y color de fondo "#44d97d". */}
        <Banner img="favorite" color="#44d97d" />
        
        <Titulo>
          {/* Muestra el título de la página "Mis favoritos". */}
          <h1>Mis favoritos</h1>
        </Titulo>
        
        {/* Contenedor para los favoritos con estilos del módulo CSS. */}
        <section className={styles.container}>
          {/* Itera sobre el array de favoritos. */}
          {favorito.map((fav) => {
            // Renderiza un componente Card para cada favorito, pasando todas las propiedades del favorito.
            return <Card {...fav} key={fav.id} />;
          })}
        </section>
      </main>
    </>
  );
}

export default Favoritos; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.