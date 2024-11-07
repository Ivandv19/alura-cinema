import styles from "./Banner.module.css"; // Importa los estilos específicos de este componente desde el archivo CSS modular.

// Definición del componente funcional 'Banner' que recibe dos props: 'img' y 'color'.
function Banner({ img, color }) {
  return (
    <div
      // Aplica la clase de estilo para el contenedor del banner (generalmente para la disposición y tamaño).
      className={styles.capa} 

      // Establece la imagen de fondo del banner, utilizando la prop 'img' para construir la URL de la imagen.
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }} 
    >
      <div
        // Aplica la clase de estilo para el contenedor del gradiente que se superpone sobre la imagen de fondo.
        className={styles.gradient}

        // Establece el color del gradiente, utilizando la prop 'color' para aplicarlo.
        style={{ background: `${color}` }} 
      >
        {/* Aquí puedes agregar contenido adicional si es necesario */}
      </div>
    </div>
  );
}

// Exporta el componente para ser utilizado en otros archivos.
export default Banner;
