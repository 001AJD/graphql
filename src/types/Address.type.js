import { GraphQLString, GraphQLObjectType } from "graphql";
import CoordinateType from "./Coordinate.type.js";

const AddressType = new GraphQLObjectType({
	name: "Address",
	fields: () => ({
		address: { type: GraphQLString },
		city: { type: GraphQLString },
		coordinates: { type: CoordinateType },
		postalCode: { type: GraphQLString },
		state: { type: GraphQLString },
	}),
});

export default AddressType;
