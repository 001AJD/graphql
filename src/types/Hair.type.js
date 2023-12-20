import { GraphQLObjectType, GraphQLString } from "graphql";

const HairType = new GraphQLObjectType({
	name: "Hair",
	fields: () => ({
		color: { type: GraphQLString },
		type: { type: GraphQLString },
	}),
});

export default HairType;
