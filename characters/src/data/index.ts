import axios from "axios";

async function listCharacters() {
  const characters = await axios.get("http://database:8004/character");
  return characters.data;
}

async function listOneCharacter(id: string) {
  const characters = await axios.get(`http://localhost:8004/character/${id}`);
  return characters.data;
}

async function deleteCharacter(id: string) {
  const character = await axios.delete(`http://localhost:8004/character/${id}`);
  return character.data;
}

async function updateCharacter(id: string, body: any[]) {
  const character = await axios.put(
    `http://localhost:8004/character/${id}`,
    body
  );
  return character.data;
}

export default {
  listCharacters,
  listOneCharacter,
  deleteCharacter,
  updateCharacter,
};
