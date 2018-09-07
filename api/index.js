const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    getAllPokemon: Resource
  }
  type Resource {
    count: Int
    results: [ResultsObj]
  }

  type ResultsObj {
    name: String
  }
  type Pokemon {
    id: Int
    name: String
    height: Int
    abilities: [AbilityObj]
    stats: [StatObj]
    sprites: SpriteObj
  }

  type AbilityObj {
    ability: Ability
  }

  type Ability {
    name: String
  }

  type StatObj {
    base_stat: Int
    stat: Stat
  }

  type Stat {
    name: String
  }

  type SpriteObj {
    front_default: String
  }

`;

const resolvers = {
  Query: {
    getAllPokemon: async () => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=20`);
      return response.json();
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
