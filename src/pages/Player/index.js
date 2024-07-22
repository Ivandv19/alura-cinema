import Banner from "components/Banner";
import styles from "./Player.module.css"
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {
    const [video, setVideo] = useState([]); // Estado para almacenar la información del video
  
    const parametros = useParams(); // Obtiene los parámetros de la ruta actual (como el ID del video)
  
    useEffect(() => {
      // Efecto para cargar los datos del video cuando el componente se monta
      fetch(`https://my-json-server.typicode.com/DaniRiverol/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response => response.json())
        .then(data => {
          setVideo(...data); // Actualiza el estado con los datos del video obtenido
        });
    }, [parametros.id]); // Dependencia en el ID del video para que el efecto se ejecute cuando cambie
  
    console.log(video); // Imprime el video en la consola para depuración
  
    if (!video) return <NotFound />; // Muestra el componente NotFound si no se encuentra el video
  
    return (
      <>
        <Banner img="player" color="#58B9AE"/> {/* Muestra el banner con una imagen y color específicos */}
        <Titulo>
          <h1>Player</h1> {/* Muestra el título "Player" */}
        </Titulo>
        <section className={styles.container}> {/* Sección con estilos específicos del archivo Player.module.css */}
          <iframe
            width="100%"
            height="100%"
            src={video.link} // URL del video para el iframe
            title={video.titulo} // Título del video
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> {/* Iframe para mostrar el video */}
        </section>
      </>
    );
  }
  
  export default Player; // Exporta el componente Player para ser utilizado en otras partes de la aplicación