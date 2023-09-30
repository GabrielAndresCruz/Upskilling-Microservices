import axios from "axios";

async function listCharacters() {
  const characters = await axios.get("http://database:8004/character");
  return characters.data;
}

async function listOneCharacter(id: string) {
  const characters = await axios.get(`http://database:8004/character/${id}`);
  return characters.data;
}

export default {
  listCharacters,
  listOneCharacter,
};
