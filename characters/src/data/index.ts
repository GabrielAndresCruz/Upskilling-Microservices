import axios from "axios";

export async function listCharacters() {
  const characters = await axios.get("http://database:8004/character");
  return characters.data;
}
