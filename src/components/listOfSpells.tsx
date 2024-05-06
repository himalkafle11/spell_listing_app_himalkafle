import React, { useEffect, useState } from "react";
import getSpellData from "../services/getSpellData";
import BasicLayout from "../layout/basicLayout";
import { Spell } from "../types/spellTypes";
import { Link } from "react-router-dom";

const ListOfSpells = () => {
  const [spellData, setSpellData] = useState<Spell[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSpellData();
        setSpellData(data);
      } catch (error) {
        console.error("Error fetching spell data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BasicLayout>
      <div className="text-2xl font-semibold text-primaryColor text-center mb-6">
        List of Spells
      </div>
      <div className="flex flex-col gap-4">
        {spellData &&
          spellData?.map((spell, index) => (
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

export default ListOfSpells;
