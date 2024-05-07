import React, { useEffect, useState } from "react";
import BasicLayout from "../layout/basicLayout";
import { Spell } from "../types/spellTypes";
import { getFavouriteSpells } from "../services/localStorageService";
import { Link } from "react-router-dom";
import Loader from "./loader";

const FavouriteSpells = () => {
  const [favouriteSpells, setFavouriteSpells] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setFavouriteSpells(getFavouriteSpells());
    setLoading(false);
  }, []);

  return (
    <BasicLayout>
      <div className="text-2xl font-semibold text-primaryColor text-center mb-6">
        Favourite Spells
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-2">
          {favouriteSpells.length > 0 ? (
            favouriteSpells.map((spell: Spell, index: number) => (
              <Link
                to={`/spell/${spell.index}`}
                key={index}
                className="bg-gray-100 hover:bg-gray-300 rounded-md px-4 py-2 cursor-pointer transition-all duration-150 ease-in-out"
              >
                <span className="mr-2">{index + 1}.</span>
                <span>{spell.name}</span>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-[70vh] bg-gray-100 text-red-400 font-semibold md:text-xl">
              No Favourite Spells Added
            </div>
          )}
        </div>
      )}
    </BasicLayout>
  );
};

export default FavouriteSpells;
