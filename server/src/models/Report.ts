import * as mongoose from 'mongoose';

const { Schema } = mongoose;

type Report = {
	sender: string;
	message: string;
	createdAt: string;
} & mongoose.Document;

const reportSchema = new Schema({
	sender: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	message: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Report = mongoose.model<Report>('Report', reportSchema);
export default Report;
