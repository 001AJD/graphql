import { GraphQLObjectType, GraphQLString } from "graphql";

const CoordinateType = new GraphQLObjectType({
	name: "Coordinate",
	fields: () => ({
		lat: { type: GraphQLString },
		lng: { type: GraphQLString },
	}),
});

export default CoordinateType;
