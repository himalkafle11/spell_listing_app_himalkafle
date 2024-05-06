import React, { useEffect, useState } from "react";
import BasicLayout from "../layout/basicLayout";
import { Spell } from "../types/spellTypes";
import getSingleSpellData from "../services/getSingleSpellData";
import { Link, useParams } from "react-router-dom";
import AddToFavouriteButton from "./addToFavouriteButton";
import { addToFavouriteSpells } from "../services/localStorageService";

const SingleSpellInformation = () => {
  const { spellName } = useParams<{ spellName: any }>();
  const [spellData, setSpellData] = useState<Spell | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleSpellData(spellName);
        setSpellData(data);
      } catch (error) {
        console.error("Error fetching spell data:", error);
      }
    };

    fetchData();
  }, [spellName]);

  const currentSpell: Spell = { name: spellData?.name, index: spellData?.index };


  const addToFavourites = (spell: Spell) => {
    addToFavouriteSpells( spell);
  }

  return (
    <BasicLayout>
      <div className="flex md:flex-row flex-col items-start md:items-center gap-3 md:gap-8 mb-6">
        <div className="flex items-center gap-1 ">
          <Link
            to={`/`}
            className="cursor-pointer hover:text-primaryColor transition-all duration-150 ease-in-out text-gray-500"
          >
            List of Spells
          </Link>
          <span>{">>"}</span>
          <span className="cursor-pointer font-semibold">
            {spellData && spellData.name}
          </span>
        </div>
        <AddToFavouriteButton onClick={() => addToFavourites(currentSpell)} />
      </div>
      <div className="flex flex-col flex-wrap gap-2">
        {spellData && (
          <div className="bg-gray-100 rounded-md p-6 border break-words">
            <pre>{JSON.stringify(spellData, null, 5)}</pre>
          </div>
        )}
      </div>
    </BasicLayout>
  );
};

export default SingleSpellInformation;
