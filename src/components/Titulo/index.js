import styles from "./Titulo.module.css"

// Componente funcional Titulo que recibe 'children' como prop
function Titulo({ children }) {
    return (
        // Contenedor con la clase 'texto' del archivo CSS modular
        <div className={styles.texto}>
            {/* Muestra el contenido recibido a través de 'children' */}
            {children}
        </div>
    );
}

export default Titulo;