
import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favoritesCities, setFavoriteCities] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favoritesCities, setFavoriteCities }}>
            {children}
        </FavoritesContext.Provider>
    );
};
