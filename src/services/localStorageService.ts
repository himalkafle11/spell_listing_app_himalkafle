
export const addToFavouriteSpells = (spellData: any): void => {
  try {
      const existingData = localStorage.getItem("favouriteSpells");
      let favourites = existingData ? JSON.parse(existingData) : [];
      
      const spellExists = favourites.some((spell: any) => spell.name === spellData.name);
      
      if (!spellExists) {
          favourites.push(spellData);
          localStorage.setItem("favouriteSpells", JSON.stringify(favourites));
      }
  } catch (error) {
      console.error("Error adding to favourite spells:", error);
  }
};

  export const getFavouriteSpells = (): any[] => {
    try {
        const existingData = localStorage.getItem("favouriteSpells");
        return existingData ? JSON.parse(existingData) : [];
    } catch (error) {
        console.error("Error getting favourite spells:", error);
        return [];
    }
};
