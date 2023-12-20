import {
	GraphQLInt,
	GraphQLString,
	GraphQLFloat,
	GraphQLObjectType,
} from "graphql";
import HairType from "./Hair.type.js";
import AddressType from "./Address.type.js";

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
		macAddress: { type: GraphQLString },
		university: { type: GraphQLString },
		userAgent: { type: GraphQLString },
	}),
});

export default UserType;
