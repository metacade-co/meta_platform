// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const games = [
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/blockchainMonsterHunt.png",
    name: "Blockchain Monster Hunt",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/bombCrypto.png",
    name: "Bomb Crypto",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/cyberArena.png",
    name: "Cyber Arena",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/deltaTime.png",
    name: "Delta Time",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/divineJustice.png",
    name: "Divine Justice 2",
    tags: ["Strategy"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/leagueKingdoms.png",
    name: "League Kingdoms 2",
    tags: ["Strategy"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/blockchainMonsterHunt.png",
    name: "Blockchain Monster Hunt 2",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/bombCrypto.png",
    name: "Bomb Crypto 2",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/cyberArena.png",
    name: "Cyber Arena 2",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/deltaTime.png",
    name: "Delta Time 2",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/pegaxy.png",
    name: "Pegaxy",
    tags: ["Strategy"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/publicLandHunter.png",
    name: "Public Land Hunter",
    tags: ["Strategy"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/splinterLands.png",
    name: "Splinter Lands",
    tags: ["MMO"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/undisputed.png",
    name: "Undisputed",
    tags: ["Strategy"],
  },
  {
    imageURL: "https://metacade-files.fra1.digitaloceanspaces.com/images/gamesImages/256x136/wolfgame.png",
    name: "Wolfgame",
    tags: ["MMO"],
  },
];

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
      res.status(404).end(`Provide a category!`);
  }
}
