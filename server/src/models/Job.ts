import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const pointSchema = new Schema({
	x: Number,
	y: Number,
	z: Number
});

const jobSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	checkpoints: [pointSchema]
});

export default mongoose.model('Job', jobSchema);
