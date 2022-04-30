import * as mongoose from 'mongoose';

const { Schema } = mongoose;

type Vehicle = {
	owner: string;
	owners: string[];
	model: string;
	vehicleClass: string;
	numberPlate: string;
	fuel: number;
	inventory: any[];
	state: any;
	tuning: any;
	label?: string;
};

const vehicleSchema = new Schema({
	owner: Schema.Types.ObjectId,
	owners: [Schema.Types.ObjectId],
	model: {
		type: String,
		required: true
	},
	numberPlate: {
		type: String,
		required: true
	},
	fuel: {
		type: Number,
		required: true
	},
	inventory: [],
	state: {
		type: Object,
		default: {}
	},
	tuning: {
		type: Object,
		default: {}
	},
	label: String
});

export default mongoose.model<Vehicle & mongoose.Document>('Vehicle', vehicleSchema);
