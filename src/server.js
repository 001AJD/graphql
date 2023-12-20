import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import RootQuery from "./rootQuery.js";
const app = express();

const schema = new GraphQLSchema({ query: RootQuery });

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
		pretty: true,
	})
);

app.listen(4000, () => {
	console.log("graphql is listening on http://localhost:4000/");
});
