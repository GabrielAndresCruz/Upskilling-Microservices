import axios from "axios";

export async function listPlanets() {
  const planets = await axios.get("http://database:8004/planet");
  return planets.data;
}
