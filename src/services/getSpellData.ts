import axios from "axios";

const getSpellData = async () => {
  try {
    const response = await axios.get("https://www.dnd5eapi.co/api/spells");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching spell data:", error);
    throw error;
  }
};

export default getSpellData;
