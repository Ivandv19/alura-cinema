import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";
import { Link } from "react-router-dom";

function Card({ id, capa, titulo }) {
  // Obtiene el estado de favoritos y la función para agregar o eliminar favoritos desde el contexto.
  const { favorito, agregarFavorito } = useFavoritosContext();
  
  // Verifica si la tarjeta actual es un favorito.
  const isFavorito = favorito.some(fav => fav.id === id);
  
  // Determina qué icono mostrar en función de si la tarjeta es un favorito.
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  return (
    <div className={styles.container}>
      {/* Enlace a la página del video utilizando el id del video. */}
      <Link className={styles.link} to={`/${id}`}>
        {/* Imagen de la portada del video. */}
        <img src={capa} alt={titulo} className={styles.capa} />
        {/* Título del video. */}
        <h2>{titulo}</h2>
      </Link>
      {/* Icono para agregar o eliminar de favoritos. */}
      <img
        src={icon}
        alt="Icono favorito"
        className={styles.favorito}
        // Maneja el clic en el icono para agregar o eliminar de favoritos.
        onClick={() => agregarFavorito({ id, titulo, capa })}
      />
    </div>
  );
}

export default Card;
