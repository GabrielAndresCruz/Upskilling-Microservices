import axios from "axios";

export async function listFilms() {
  const films = await axios.get("http://database:8004/film");
  return films.data;
}
