import fetch from "node-fetch";

const resolvers = {
  Query: {
    getAllPokemon: async () => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=20`);
      return response.json();
    }
  }
};

export default resolvers;
