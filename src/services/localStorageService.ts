import { Spell } from "../types/spellTypes";

export const addToFavouriteSpells = (spellData: Spell): void => {
  try {
    const existingData = localStorage.getItem("favouriteSpells");
    let favourites = existingData ? JSON.parse(existingData) : [];

    const spellExists = favourites.some(
      (spell: Spell) => spell.name === spellData.name
    );

    if (!spellExists) {
      favourites.push(spellData);
      localStorage.setItem("favouriteSpells", JSON.stringify(favourites));
    }
  } catch (error) {
    console.error("Error adding to favourite spells:", error);
  }
};

export const getFavouriteSpells = (): Spell[] => {
  try {
    const existingData = localStorage.getItem("favouriteSpells");
    return existingData ? JSON.parse(existingData) : [];
  } catch (error) {
    console.error("Error getting favourite spells:", error);
    return [];
  }
};
