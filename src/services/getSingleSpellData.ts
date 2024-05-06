import axios from 'axios';

const getSingleSpellData = async (spell:string) => {
  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${spell}`);
    return response.data
  } catch (error) {
    console.error("Error fetching spell data:", error);
    throw error
  }
};

export default getSingleSpellData;
