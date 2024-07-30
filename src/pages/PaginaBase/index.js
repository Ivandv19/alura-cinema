import Cabecera from "components/Cabecera/Cabecera"
import FavoritoProvider from "context/Favoritos"
import Pie from "components/Pie"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecera/> {/* Muestra la cabecera en la parte superior de la página */}
            <FavoritoProvider> {/* Proveedor del contexto de favoritos, disponible para los componentes hijos */}
                    <Outlet/> {/* Renderiza el contenido de las rutas hijas aquí */}
            </FavoritoProvider>
            <Pie/> {/* Muestra el pie de página en la parte inferior de la página */}
        </main>
    );
}

export default PaginaBase; // Exporta el componente PaginaBase para ser utilizado en otras partes de la aplicación