import axios from "axios";

async function listPlanets() {
  const planets = await axios.get("http://database:8004/planet");
  return planets.data;
}

async function listOnePlanet(id: String) {
  const planet = await axios.get(`http://database:8004/planet/${id}`);
  return planet.data;
}

async function createPlanet(body: any[]) {
  const planet = await axios.post(`http://database:8004/planet/`, body);
  return planet.data;
}

async function deletePlanet(id: String) {
  const planet = await axios.delete(`http://database:8004/planet/${id}`);
  return planet.data;
}

async function updatePlanet(id: String, body: any[]) {
  const planet = await axios.put(`http://database:8004/planet/${id}`, body);
  return planet.data;
}

export default {
  listPlanets,
  listOnePlanet,
  createPlanet,
  deletePlanet,
  updatePlanet,
};
