import app from "./src/server";

const PORT = 8004;

app.listen(PORT, () => {
  console.log(`Database listening on port ${PORT}`);
});
