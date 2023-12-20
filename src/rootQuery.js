import userData from "../data/data.json" assert { type: "json" };
import UserType from "./types/User.type.js";
import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLList,
	GraphQLString,
} from "graphql";

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
			resolve(parent, args) {
				return ["Dummy Data 1", "Dummy Data 2"];
			},
		},
	},
});

export default RootQuery;
