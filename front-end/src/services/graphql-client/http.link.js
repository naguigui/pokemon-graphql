import { createHttpLink } from "apollo-link-http";

const API_URL = "http://localhost:4000/graphql";

export default createHttpLink({ uri: API_URL });
