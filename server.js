import express from "express";
import { graphqlHTTP } from "express-graphql";
import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLFloat,
} from "graphql";

import userData from "./data.json" assert { type: "json" };
const app = express();

const CoordinateType = new GraphQLObjectType({
	name: "CoordinateType",
	fields: () => ({
		lat: { type: GraphQLString },
		lng: { type: GraphQLString },
	}),
});

const AddressType = new GraphQLObjectType({
	name: "Address",
	fields: () => ({
		address: { type: GraphQLString },
		city: { type: GraphQLString },
		coordinate: { type: CoordinateType },
		postalCode: { type: GraphQLString },
		state: { type: GraphQLString },
	}),
});

const HairType = new GraphQLObjectType({
	name: "Hair",
	fields: () => ({
		color: { type: GraphQLString },
		type: { type: GraphQLString },
	}),
});

const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		id: {
			type: GraphQLInt,
		},
		firstName: {
			type: GraphQLString,
		},
		lastName: {
			type: GraphQLString,
		},
		maidenName: {
			type: GraphQLString,
		},
		age: {
			type: GraphQLInt,
		},
		gender: {
			type: GraphQLString,
		},
		email: {
			type: GraphQLString,
		},
		phone: {
			type: GraphQLString,
		},
		username: {
			type: GraphQLString,
		},
		password: {
			type: GraphQLString,
		},
		birthDate: {
			type: GraphQLString,
		},
		image: {
			type: GraphQLString,
		},
		bloodGroup: {
			type: GraphQLString,
		},
		height: {
			type: GraphQLFloat,
		},
		weigth: {
			type: GraphQLFloat,
		},
		eyeColor: {
			type: GraphQLString,
		},
		hair: {
			type: HairType,
		},
		domain: {
			type: GraphQLString,
		},
		ip: {
			type: GraphQLString,
		},
		address: { type: AddressType },
		university: { type: GraphQLString },
		userAgent: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		user: {
			type: new GraphQLList(UserType),
			args: { id: { type: GraphQLInt } },
			resolve(parent, args) {
				if (args.id !== undefined) {
					return userData.filter((item) => item.id === args.id);
				} else {
					return userData;
				}
			},
		},
		getBlog: {
			type: new GraphQLList(GraphQLString),
			resolve(paren, args) {
				return ["Dummy Data 1", "Dummy Data 2"];
			},
		},
	},
});

let schema = new GraphQLSchema({ query: RootQuery });

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
