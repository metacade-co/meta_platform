import games from "src/utils/games.db";

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(
        games.find(({ id }) => {
          return id == query.id;
        }),
      );
      break;
    default:
      res.status(404).send(`Provide a category!`);
  }
}
