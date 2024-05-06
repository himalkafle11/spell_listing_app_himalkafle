import React, { useEffect, useState } from "react";
import BasicLayout from "../layout/basicLayout";
import { Spell } from "../types/spellTypes";
import { getFavouriteSpells } from "../services/localStorageService";
import { Link } from "react-router-dom";

const FavouriteSpells = () => {
  const [favouriteSpells, setFavouriteSpells] = useState<any[]>([]);

  useEffect(() => {
    setFavouriteSpells(getFavouriteSpells());
  }, []);

  return (
    <BasicLayout>
      <div className="text-2xl font-semibold text-primaryColor text-center mb-6">Favourite Spells</div>
      <div className="flex flex-col gap-2">
        {favouriteSpells.map((spell: Spell, index: number) => (
            <Link
            to={`/spell/${spell.index}`}
            key={index}
            className="bg-gray-100 hover:bg-gray-300 rounded-md px-4 py-2 cursor-pointer transition-all duration-150 ease-in-out"
          >
            <span className="mr-2">{index + 1}.</span>
            <span>{spell.name}</span>
          </Link>
        ))}
      </div>
    </BasicLayout>
  );
};

export default FavouriteSpells;
