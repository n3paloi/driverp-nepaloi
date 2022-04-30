import * as mongoose from 'mongoose';

const { Schema } = mongoose;

type Report = {
	userId: ObjectId;
	inside: boolean;
	time: number;
	reason?: string;
	violations: number[];
	violatedAt: string;
} & mongoose.Document;

const violatorSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	inside: {
		type: Boolean,
		default: false
	},
	time: {
		type: Number,
		default: 0
	},
	reason: String,
	violations: [],
	violatedAt: {
		type: Date,
		default: Date.now
	}
});

export default mongoose.model<Report>('Violator', violatorSchema);
