import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie";
import FavoritoProvider from "context/Favoritos";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Cabecera />
            <FavoritoProvider>
                <Outlet />
            </FavoritoProvider>
            <Pie />
        </>
    )
}

export default App;