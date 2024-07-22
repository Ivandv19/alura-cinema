import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";
import Player from "pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter> {/* Envuelve la aplicación en un enrutador para manejar las rutas */}
      <Routes> {/* Define las rutas para la aplicación */}
        <Route path="/" element={<PaginaBase />}> {/* Ruta base que renderiza el componente PaginaBase */}
          <Route index element={<Inicio />}></Route> {/* Ruta por defecto que renderiza el componente Inicio en la página base */}
          <Route path="favoritos" element={<Favoritos />}></Route> {/* Ruta para la página de Favoritos */}
          <Route path=":id" element={<Player />}></Route> {/* Ruta dinámica que renderiza el componente Player con un parámetro de ID */}
          <Route path="*" element={<NotFound />}></Route> {/* Ruta para manejar cualquier URL no definida, mostrando el componente NotFound */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; // Exporta el componente AppRoutes para ser utilizado en la aplicación