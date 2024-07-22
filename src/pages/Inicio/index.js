import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import { useState, useEffect } from "react";

function Inicio() {
  // Estado local para almacenar los videos obtenidos.
  const [videos, setVideos] = useState([]);

  // Efecto para cargar los videos desde la API cuando el componente se monta.
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos" // URL de la API para obtener videos.
    )
      .then((response) => response.json()) // Convierte la respuesta en JSON.
      .then((data) => {
        setVideos(data); // Actualiza el estado con los datos de los videos.
      });
  }, []); // El array vacío como dependencia asegura que el efecto solo se ejecute una vez, al montar el componente.

  return (
    <>
      <Banner img="home" color="#154580" /> {/* Muestra el componente Banner con la imagen "home" y color de fondo "#154580". */}
      <Titulo>
        <h1>Un lugar para guardar sus videos favoritos </h1> {/* Muestra el título de la página. */}
      </Titulo>

      <section className={styles.container}> {/* Contenedor principal para los videos con estilos del módulo CSS. */}
        {videos.map((video) => { // Itera sobre el array de videos.
          return <Card {...video} key={video.id} />; // Renderiza un componente Card para cada video, pasando todas las propiedades del video.
        })}
      </section>
    </>
  );
}

export default Inicio; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.