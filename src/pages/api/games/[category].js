import games from "src/utils/games.db";

export default function handler(req, res) {
  const { query, method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(
        games.filter(({ tags }) => {
          return tags.includes(query.category);
        }),
      );
      break;
    default:
      res.status(404).send(`Provide a category!`);
  }
}
