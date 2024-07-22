import styles from "./Banner.module.css";

function Banner({ img, color }) {
  return (
    <div
      className={styles.capa} // Aplica la clase de estilo para el contenedor del banner.
      style={{ backgroundImage: `url("/img/banner-${img}.png")` }} // Establece la imagen de fondo del banner basada en el prop `img`.
    >
      <div
        className={styles.gradient} // Aplica la clase de estilo para el contenedor del gradiente.
        style={{ background: `${color}` }} // Aplica el color del gradiente basado en el prop `color`.
      >
        {/* Aquí puedes agregar contenido adicional si es necesario */}
      </div>
    </div>
  );
}

export default Banner;
