import axios from "axios";

async function listFilms() {
  const films = await axios.get("http://database:8004/film");
  return films.data;
}

async function listOneFilm(id: String) {
  const film = await axios.get(`http://database:8004/film/${id}`);
  return film.data;
}

async function createFilm(body: any[]) {
  const film = await axios.post(`http://database:8004/film/`, body);
  return film.data;
}

async function deleteFilm(id: string) {
  const film = await axios.delete(`http://database:8004/film/${id}`);
  return film.data;
}

async function updateFilm(id: string, body: any[]) {
  const film = await axios.put(`http://database:8004/film/${id}`, body);
  return film.data;
}

export default {
  listFilms,
  listOneFilm,
  createFilm,
  updateFilm,
  deleteFilm,
};
