import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FavouriteButton, Spell } from "../types/spellTypes";

const AddToFavouriteButton: React.FC<FavouriteButton> = ({
  spell,
  onClick,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(
    checkIsSpellFavourite(spell)
  );

  function checkIsSpellFavourite(spell: Spell): boolean {
    const existingData = localStorage.getItem("favouriteSpells");
    const favourites = existingData ? JSON.parse(existingData) : [];
    return favourites.some((favSpell: Spell) => favSpell.name === spell.name);
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
      const spellIsFavourite = checkIsSpellFavourite(spell);
      setIsFavourite(spellIsFavourite);
    }
  };

  return isFavourite ? (
    <div className="bg-orange-500 px-2 py-1 rounded-md text-sm text-white font-semibold">
      Favourite Spell
    </div>
  ) : (
    <div
      className="px-2 py-1 rounded-md bg-green-500 text-white font-semibold text-sm cursor-pointer"
      onClick={handleClick}
    >
      <AddCircleOutlineIcon fontSize={"small"} /> <span>Add to Favorites</span>
    </div>
  );
};

export default AddToFavouriteButton;
