import { createContext, useContext, useState } from "react";

// Crea un contexto para manejar el estado de favoritos.
export const FavoritosContext = createContext();

// Establece un nombre para el contexto que puede ser útil en herramientas de desarrollo.
FavoritosContext.displayName = "Favoritos";

// Proveedor del contexto de favoritos
export default function FavoritoProvider({ children }) {
  // Estado local para almacenar la lista de favoritos.
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {/* Proporciona el estado de favoritos y la función para actualizarlo a los componentes hijos. */}
      {children}
    </FavoritosContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de favoritos
export function useFavoritosContext() {
  // Obtiene el estado y la función para actualizar el estado desde el contexto.
  const { favorito, setFavorito } = useContext(FavoritosContext);

  // Función para agregar o eliminar un favorito.
  function agregarFavorito(nuevoFavorito) {
    // Verifica si el favorito ya está en la lista.
    const favoritoRepetido = favorito.some(
      (item) => item.id === nuevoFavorito.id
    );
    
    let nuevaLista = [...favorito]; // Crea una copia del estado de favoritos.
    
    if (!favoritoRepetido) {
      // Si el favorito no está en la lista, lo agrega.
      nuevaLista.push(nuevoFavorito);
    } else {
      // Si el favorito ya está en la lista, lo elimina.
      nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    }
    
    // Actualiza el estado de favoritos con la nueva lista.
    setFavorito(nuevaLista);
  }

  // Devuelve el estado de favoritos y la función para agregar o eliminar favoritos.
  return { favorito, agregarFavorito };
}