import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FavouriteButton, Spell } from "../types/spellTypes";
import { updateFavouriteSpell } from "../services/localStorageService";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const AddToFavouriteButton: React.FC<FavouriteButton> = ({
  spell,
  onClick,
}) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(
    checkIsSpellFavourite(spell)
  );
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  function checkIsSpellFavourite(spell: Spell): boolean {
    const existingData = localStorage.getItem("favouriteSpells");
    const favourites = existingData ? JSON.parse(existingData) : [];
    return favourites.some((favSpell: Spell) => favSpell.name === spell.name);
  }

  const handleClick = () => {
    if (!isProcessing) {
      setIsProcessing(true);
      const spellIsFavourite = !isFavourite;
      setIsFavourite(spellIsFavourite);
      updateFavouriteSpell(spell, spellIsFavourite);
      setIsProcessing(false);
    }
  };

  return isFavourite ? (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1 text-orange-500">
        <BookmarkIcon /> <span className="font-semibold"> Favourite Spell</span>
      </div>
      <div
        className={`px-2 py-1 rounded-md bg-red-100 text-red-500 font-semibold text-sm cursor-pointer ${
          isProcessing ? "pointer-events-none" : ""
        }`}
        onClick={handleClick}
      >
        Remove from Favourites
      </div>
    </div>
  ) : (
    <div
      className={`px-2 py-1 rounded-md bg-green-500 text-white font-semibold text-sm cursor-pointer ${
        isProcessing ? "pointer-events-none" : ""
      }`}
      onClick={handleClick}
    >
      <AddCircleOutlineIcon fontSize={"small"} /> <span>Add to Favourites</span>
    </div>
  );
};

export default AddToFavouriteButton;
