import styles from "./Container.module.css";

// Componente funcional Container que recibe 'children' como prop
function Container({ children }) {
  // Renderiza una sección con la clase 'container' del archivo CSS modular
  return <section className={styles.container}>{children}</section>;
}

export default Container;
