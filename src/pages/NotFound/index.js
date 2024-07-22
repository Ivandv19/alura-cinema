import styles from "./NotFound.module.css"

function NotFound() {
    return (
        <section className={styles.container}> {/* Contenedor principal del componente NotFound */}
            <h2 className={styles.error}>404</h2> {/* Muestra el código de error 404 */}
            <p className={styles.text_error}>Página no encontrada</p> {/* Mensaje que indica que la página no fue encontrada */}
        </section>
    );
}

export default NotFound; // Exporta el componente NotFound para ser utilizado en otras partes de la aplicación