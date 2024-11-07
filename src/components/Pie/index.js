import styles from "./Pie.module.css"

// Componente funcional Pie
function Pie() {
    return (
        // Elemento de pie de página con la clase 'pie' del archivo CSS modular
        <footer className={styles.pie}>
            <p>
                {/* Texto con información sobre el desarrollo y autor */}
                Desarrollado por Alura Latam y por Ivan Cruz  <br /> 
                Estudiante ONE (G6) - Oracle Next Education <br /> 
                2024 🇲🇽
            </p>
        </footer>
    );
}

export default Pie;