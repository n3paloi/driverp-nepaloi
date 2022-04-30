import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const pointSchema = new Schema({
	x: Number,
	y: Number,
	z: Number
});

const garageSchema = new Schema({
	ownerId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	customCost: {
		type: Number,
		default: 0
	},
	garageClass: {
		type: String,
		required: true
	},
	forSale: {
		type: Boolean,
		default: true
	},
	entrance: {
		type: pointSchema,
		required: true
	},
	locked: {
		type: Boolean,
		default: false
	},
	paidDays: {
		type: Number,
		default: 1
	}
});

export default mongoose.model('Garage', garageSchema);
